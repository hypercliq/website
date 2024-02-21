'use client'

import { Circle, Line, PerformanceMonitor } from '@react-three/drei'
import { Canvas, RootState, useFrame, useThree } from '@react-three/fiber'
import {
  CSSProperties,
  Fragment,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Material, Mesh, MeshBasicMaterial, Vector3 } from 'three'
import Perlin from '../utils/perlin'

const c = 10
const perlin = new Perlin()
const numberOfNodes = 25

const MIN_LIFE_SPAN = 5
const LIFE_SPAN_RANGE = 20

const initNodes = (
  setUpdates: {
    (value: SetStateAction<{ positions: Vector3[]; opacities: number[] }>): void
    (arg0: (prevUpdates: any) => any): void
  },
  materialCacheRef: MutableRefObject<Map<string, MeshBasicMaterial>>,
) => {
  return Array.from({ length: numberOfNodes }, (_, i) => (
    <Node
      key={i}
      index={i}
      updateHandler={(index: number, position: Vector3, opacity: number) => {
        setUpdates((prevUpdates) => {
          const newUpdates = { ...prevUpdates }
          newUpdates.positions[index] = position
          newUpdates.opacities[index] = opacity
          return newUpdates
        })
      }}
      material={(opacity = 1, color = '#8b8b8e') => {
        const key = `${quantizeOpacity(opacity)}-${color}`
        if (!materialCacheRef.current.has(key)) {
          materialCacheRef.current.set(
            key,
            new MeshBasicMaterial({
              color,
              opacity,
              transparent: true,
            }),
          )
        }
        return materialCacheRef.current.get(key) as MeshBasicMaterial
      }}
    />
  ))
}

const generateNodeLifeSpan = () =>
  Math.random() * LIFE_SPAN_RANGE + MIN_LIFE_SPAN

const generateNodePosition = (size: {
  width: number
  height: number
}): Vector3 =>
  new Vector3(
    (Math.random() * size.width) / 8 - size.width / 16,
    (Math.random() * size.height) / 8 - size.height / 16,
    0,
  )

const generateSpeedVector = () => new Vector3(0, 0, 0)

const quantizeOpacity = (opacity: number, precision: number = 2): number => {
  const factor = Math.pow(10, precision)
  return Math.round(opacity * factor) / factor
}

const handleLifecycle = (
  age: MutableRefObject<number>,
  delta: number,
  lifeSpanRef: MutableRefObject<number>,
  state: RootState,
  mesh: { material: Material; position: Vector3 },
  getMaterial: (opacity?: number, color?: string) => MeshBasicMaterial,
  colorRef: MutableRefObject<string>,
) => {
  age.current += delta

  if (age.current >= lifeSpanRef.current) {
    const initialPosition = generateNodePosition({
      width: state.size.width,
      height: state.size.height,
    })
    mesh.position.set(initialPosition.x, initialPosition.y, initialPosition.z)
    lifeSpanRef.current = generateNodeLifeSpan()
    age.current = 0
    colorRef.current = Math.random() > 0.05 ? '#8b8b8e' : '#f6b221'
    mesh.material = getMaterial(0, colorRef.current)
  } else if (age.current <= 1) {
    mesh.material = getMaterial(quantizeOpacity(age.current), colorRef.current)
  } else if (age.current > lifeSpanRef.current - 1) {
    mesh.material = getMaterial(
      quantizeOpacity(mesh.material.opacity - delta),
      colorRef.current,
    )
  }
}

const updatePosition = (
  offSetRef: MutableRefObject<{ x: number; y: number; z: number }>,
  speedVectorRef: MutableRefObject<Vector3>,
  delta: number,
  meshRefCurrent: Mesh,
) => {
  if (Math.random() < 0.01) {
    const noiseX = perlin.noise(
      offSetRef.current.x,
      offSetRef.current.y,
      offSetRef.current.z,
    )
    const noiseY = perlin.noise(
      offSetRef.current.y,
      offSetRef.current.x,
      offSetRef.current.z,
    )
    const noiseZ = perlin.noise(
      offSetRef.current.z,
      offSetRef.current.x,
      offSetRef.current.y,
    )
    speedVectorRef.current.set(noiseX / c, noiseY / c, noiseZ / c)
  }

  offSetRef.current.x += delta
  offSetRef.current.y += delta
  offSetRef.current.z += delta

  meshRefCurrent.position.x += speedVectorRef.current.x
  meshRefCurrent.position.y += speedVectorRef.current.y
  meshRefCurrent.position.z += speedVectorRef.current.z
}

const Node: React.FC<{
  index: number
  updateHandler: (index: number, position: Vector3, opacity: number) => void
  material: (opacity?: number, color?: string) => MeshBasicMaterial
}> = ({ index, updateHandler, material }) => {
  const meshRef = useRef<Mesh>(null)
  const lifeSpanRef = useRef<number>(generateNodeLifeSpan())
  const isFirstCallRef = useRef<boolean>(true)
  const speedVectorRef = useRef<Vector3>(generateSpeedVector())
  const radiusRef = useRef<number>(1.5)
  const offSetRef = useRef({
    x: Math.random() * 100,
    y: Math.random() * 100,
    z: Math.random() * 100,
  })

  const ageRef = useRef(0)

  const materialRef = useRef<MeshBasicMaterial>(null)
  const colorRef = useRef('#8b8b8e')

  const updateTime = useRef(0)

  useFrame((state, delta) => {
    if (delta <= 0 || !meshRef.current) return

    if (isFirstCallRef.current) {
      const initialPosition = generateNodePosition({
        width: state.size.width,
        height: state.size.height,
      })
      meshRef.current.position.set(
        initialPosition.x,
        initialPosition.y,
        initialPosition.z,
      )
      isFirstCallRef.current = false
    }

    updateTime.current += delta

    if (updateTime.current < 0.05) {
      return
    }

    updateTime.current = 0

    handleLifecycle(
      ageRef,
      delta,
      lifeSpanRef,
      state,
      meshRef.current as { material: Material; position: Vector3 },
      material,
      colorRef,
    )

    updatePosition(offSetRef, speedVectorRef, delta, meshRef.current)

    updateHandler(
      index,
      meshRef.current.position,
      (meshRef.current.material as Material).opacity,
    )
  })

  return (
    <Circle
      ref={meshRef}
      args={[radiusRef.current, 64]}
      material={materialRef.current ?? material(0, colorRef.current)}
    />
  )
}

const manhattanDistance = (a: Vector3, b: Vector3) =>
  Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z)

const getEdgeOpacity = (
  node1: Vector3,
  node2: Vector3,
  threshold: number,
  cutoff: number,
) => {
  if (!node1 || !node2) return 0
  const distance = manhattanDistance(node1, node2)
  if (distance < threshold) return 1
  if (distance > cutoff) return 0
  return (cutoff - distance) / (cutoff - threshold)
}

const Graph = () => {
  const { camera, size } = useThree()

  const [threshold, cutoff] = useMemo(() => {
    const minSize = (size.width + size.height) / 18
    return [minSize * 0.3, minSize * 0.4]
  }, [size.width, size.height])

  const materialCacheRef = useRef(new Map<string, MeshBasicMaterial>())

  const [updates, setUpdates] = useState({
    positions: Array.from({ length: numberOfNodes }, () => new Vector3()),
    opacities: Array.from({ length: numberOfNodes }, () => 0),
  })

  const nodesRef = useRef(initNodes(setUpdates, materialCacheRef))

  useEffect(() => {
    camera.far = Math.max(size.width, size.height) * 2
    camera.position.set(0, 0, Math.max(size.width, size.height) / 32)
    camera.updateProjectionMatrix()
  }, [size, camera])

  return (
    <>
      {nodesRef.current.map((node, i) => {
        return (
          <Fragment key={i}>
            {nodesRef.current.slice(i + 1).map((_, j) => {
              const edgeOpacity = getEdgeOpacity(
                updates.positions[i],
                updates.positions[j + i + 1],
                threshold,
                cutoff,
              )

              // eslint-disable-next-line unicorn/no-null
              if (edgeOpacity <= 0.1) return null

              return (
                <Line
                  key={`${i}-${j}`}
                  points={[updates.positions[i], updates.positions[j + i + 1]]}
                  color="#8b8b8e"
                  opacity={Math.min(
                    edgeOpacity,
                    Math.min(
                      updates.opacities[i],
                      updates.opacities[j + i + 1],
                    ),
                  )}
                  transparent
                  lineWidth={2.5}
                />
              )
            })}
            {node}
          </Fragment>
        )
      })}
    </>
  )
}

const Connections: React.FC<{ style?: CSSProperties }> = ({ style }) => {
  return (
    <Canvas style={style} camera={{ position: [0, 0, 5] }} dpr={[1, 2]}>
      <PerformanceMonitor>
        <Graph />
      </PerformanceMonitor>
    </Canvas>
  )
}

export default Connections
