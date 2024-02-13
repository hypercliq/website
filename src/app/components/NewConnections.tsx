'use client'

import { Circle, PerformanceMonitor, Tube } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { CSSProperties, Fragment, useEffect, useMemo, useState } from 'react'
import { CatmullRomCurve3, MeshBasicMaterial, Vector3 } from 'three'
import Perlin from '../utils/perlin'
import useCSSVariable from '../hooks/useCSSVariable'

const c = 5
const precision = 2
const perlin = new Perlin()
const numberOfNodes = 35

const generateNodeLifeSpan = () => Math.random() * 75 + 15

const generateNodePosition = (
  size: {
    width: number
    height: number
  },
  initial = false,
): Vector3 =>
  new Vector3(
    (Math.random() * size.width) / 4,
    (Math.random() * 2 * size.height) / 3 - size.height / 3 - 40,
    0,
    // (Math.random() * Math.min(size.width, size.height)) / 4 -
    //   Math.min(size.width, size.height) / 8,

    // 0 + size.width / 10,// + (Math.random() * size.width / 5 - size.width / 10),
    // 0 - size.height / 10,// + (Math.random() * size.height / 5 - size.height / 10),
    // 0,
    // // (Math.random() * size.width) / (initial ? 2 : 3) - size.width / (initial ? 4 : 6),
    // // (Math.random() * size.height) / (initial ? 2 : 3) - size.height / (initial ? 4 : 6),
    // // (Math.random() * Math.min(size.width, size.height)) / 3 - Math.min(size.width, size.height) / 6,
    // // 0,
  )

const generateSpeedVector = () => {
  return new Vector3(0, 0, 0)
  // return new Vector3(
  //   Math.random() * 0.1 - 0.05,
  //   Math.random() * 0.1 - 0.05,
  //   Math.random() * 0.1 - 0.05,
  // )
}

class Node {
  size: { width: number; height: number }
  position: Vector3
  perlin: Perlin
  index: number
  offset = {
    x: Math.random(),
    y: Math.random(),
    z: Math.random(),
  }
  speed = generateSpeedVector()
  lifeSpan = generateNodeLifeSpan()

  constructor(
    size: { width: number; height: number },
    perlin: Perlin,
    index: number,
  ) {
    this.size = size
    this.position = generateNodePosition(size, true)
    this.perlin = perlin
    this.index = index
  }

  updatePosition(delta: number): void {
    this.lifeSpan -= delta

    if (this.lifeSpan < 0) {
      this.position = generateNodePosition(this.size)
      this.lifeSpan = generateNodeLifeSpan()
    }

    if (Math.random() < 0.01) {
      const noiseX = this.perlin.noise2D(this.offset.x, this.offset.y)
      const noiseY = this.perlin.noise2D(this.offset.y, this.offset.x)
      const noiseZ = this.perlin.noise2D(this.offset.z, this.offset.x)
      this.speed.set(noiseX / c, noiseY / c, noiseZ / c)

      this.offset.x += delta
      this.offset.y += delta
      this.offset.z += delta
    }

    this.position.x += this.speed.x
    this.position.y += this.speed.y
    this.position.z += this.speed.z

    // if x  <= 0 or x >= size.width /4, invert x speed
    if (this.position.x <= 0 || this.position.x >= this.size.width / 4) {
      this.speed.x *= -3
    }

    // if y <= size.height / 3 or y >= 2 * size.height / 3, invert y speed
    if (
      this.position.y <= -this.size.height / 4 ||
      this.position.y >= this.size.height / 4
    ) {
      this.speed.y *= -1
    }
  }

  getOpacity(): number {
    return Number(
      Math.max(0, Math.min(1, this.lifeSpan / 2)).toFixed(precision),
    )
  }
}

const manhattanDistance = (a: Vector3, b: Vector3) =>
  Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z)

const getEdgeOpacity = (
  node1: Vector3,
  node2: Vector3,
  threshold: number,
  cutoff: number,
) => {
  const distance = manhattanDistance(node1, node2)
  if (distance < threshold) return 1
  if (distance > cutoff) return 0
  return Number(((cutoff - distance) / (cutoff - threshold)).toFixed(precision))
}

const createMaterialCache = (
  materialColor: string,
): Map<number, MeshBasicMaterial> => {
  const cache = new Map()

  const color = `rgb(${materialColor
    .split(' ')
    .map((c) => Number.parseInt(c, 10))
    .join(',')})`

  /* cache keys go from 0 to 1 in steps of 0.[precision] 
   e.g. if precision is 2 then 0, 0.01, 0.02, 0.03, ... 0.99, 1 
   if precision is 3 then 0, 0.001, 0.002, 0.003, ... 0.999, 1
   */
  for (let i = 0; i <= 10 ** precision; i++) {
    const opacityValue = Number(((i * 1) / 10 ** precision).toFixed(precision))
    cache.set(
      opacityValue,
      new MeshBasicMaterial({
        color,
        transparent: true,
        opacity: opacityValue,
      }),
    )
  }
  return cache
}

const Graph = ({ materialColor }: { materialColor: string }) => {
  const { camera, size } = useThree()
  const [flipFlopRender, setFlipFlopRender] = useState(false)

  const [threshold, cutoff] = useMemo(() => {
    const minSize = (size.width + size.height) / 5
    return [minSize * 0.3, minSize * 0.35]
  }, [size.width, size.height])

  const nodes = useMemo(
    () =>
      Array.from(
        { length: numberOfNodes },
        (_, i) =>
          new Node({ width: size.width, height: size.height }, perlin, i),
      ),
    [size.width, size.height],
  )

  const materialCache = useMemo(
    () => createMaterialCache(materialColor),
    [materialColor],
  )

  useEffect(() => {
    camera.far = Math.max(size.width, size.height) * 2
    camera.position.set(0, 0, Math.min(size.width, size.height) / 2)
    camera.updateProjectionMatrix()
  }, [size, camera])

  useFrame((_, delta) => {
    for (const node of nodes) {
      node.updatePosition(delta)
    }
    setFlipFlopRender((f) => !f) // Toggle to force re-render
  })

  return (
    <>
      {nodes.map((node, i) => {
        return (
          <Fragment key={node.index}>
            <Circle
              position={[node.position.x, node.position.y, node.position.z]}
              args={[3, 16]}
              material={materialCache.get(node.getOpacity())}
            />
            {nodes.slice(i + 1).map((node2) => {
              const edgeOpacity = getEdgeOpacity(
                node.position,
                node2.position,
                threshold,
                cutoff,
              )

              // eslint-disable-next-line unicorn/no-null
              if (edgeOpacity <= 0.1) return null

              let material = materialCache.get(edgeOpacity)
              // if (!material) {
              //   material = new MeshBasicMaterial({
              //     color: materialColor,
              //     transparent: true,
              //     opacity: edgeOpacity,
              //   })
              //   materialCache.set(edgeOpacity, material)
              // }

              return (
                <Tube
                  key={`${node.index}-${node2.index}`}
                  args={[
                    new CatmullRomCurve3([node.position, node2.position]), // path is a Curve<Vector3>
                    2, // tubularSegments
                    0.6, // radius
                    4, // radialSegments
                    false, // closed
                  ]}
                  material={material}
                />
              )
            })}
          </Fragment>
        )
      })}
    </>
  )
}

const ThreeCanvas: React.FC<{ style?: CSSProperties }> = ({ style }) => {
  const foreground = useCSSVariable('--color-foreground')

  return (
    <Canvas style={style} camera={{ position: [0, 0, 5] }} dpr={[1, 2]}>
      <PerformanceMonitor>
        <Graph materialColor={foreground} />
      </PerformanceMonitor>
    </Canvas>
  )
}

export default ThreeCanvas
