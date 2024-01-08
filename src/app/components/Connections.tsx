'use client'

import { useEffect, useRef } from 'react'

let cutoff: number = 0

const GRAYSCALE = Math.round(0.299 * 22 + 0.587 * 22 + 0.114 * 29)

const sketch = (p: any) => {
  let nodes: Node[] = []
  let edges: Edge[] = []
  // let counter: number = 0
  p.setup = () => {
    const renderer = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
    const canvas = renderer.canvas

    if (canvas) {
      const context = canvas.getContext('webgl', { antialias: true })
      if (context) renderer.drawingContext = context
    }

    // Create nodes with random x, y, and z values
    for (let i = 0; i < 100; i++) {
      nodes.push(createNewNode())
    }

    // Create edges between nodes that are within a certain distance of each other
    // the distance should be proportional to the canvas size (x, y, z)
    cutoff = p.dist(p.windowWidth, p.windowHeight, 200, 0, 0, 0) * 0.1

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = p.dist(
          nodes[i].x,
          nodes[i].y,
          nodes[i].z,
          nodes[j].x,
          nodes[j].y,
          nodes[j].z,
        )
        if (distance < cutoff) {
          edges.push(new Edge(nodes[i], nodes[j], p))
        }
      }
    }
  }

  p.draw = () => {
    p.background(10)

    // Draw edges
    for (const edge of edges) {
      edge.display()
    }

    // Draw nodes
    for (const node of nodes) {
      if (p.frameCount % 60 === 0 && node.isDead()) {
        handleDeadNode(node)
      }

      node.move()
      node.display()
    }
  }

  function handleDeadNode(node: Node) {
    // Remove the node
    const nodeIndex = nodes.findIndex((n) => n.id === node.id)
    if (nodeIndex !== -1) {
      nodes.splice(nodeIndex, 1)
    }

    // Remove any edges connected to the node
    let i = edges.length
    while (i--) {
      if (edges[i].node1.id === node.id || edges[i].node2.id === node.id) {
        edges.splice(i, 1)
      }
    }

    const newNode = createNewNode()
    // Create a new node
    nodes.push(newNode)

    // Create edges between newNode and nodes within cutoff distance
    for (const n of nodes) {
      const distance = p.dist(newNode.x, newNode.y, newNode.z, n.x, n.y, n.z)
      if (distance < cutoff) {
        edges.push(new Edge(newNode, n, p))
      }
    }
  }

  function createNewNode() {
    return new Node(
      p.random(-p.width / 2, p.width / 2),
      p.random(-p.height / 2 + 100, p.height / 2),
      p.random(-100, 100),
      p,
    )
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
    cutoff = p.dist(p.windowWidth, p.windowHeight, 200, 0, 0, 0) * 0.08
  }

  p.remove = () => {
    nodes = []
    edges = []
  }
}

class Node {
  [key: string]: any
  offset: { x: number; y: number; z: number }
  size: number = 0
  color: number = 0
  id: string
  lifespan: number
  age: number = 0
  fadeStart: number
  opacity: number = 0
  speed: { x: number; y: number; z: number } = { x: 0, y: 0, z: 0 }
  speedScale: number = 0

  constructor(x: number, y: number, z: number, p: any) {
    this.x = x
    this.y = y
    this.z = z
    this.p = p
    this.offset = { x: p.random(1000), y: p.random(1000), z: p.random(1000) }

    this.updateZDependentProperties()

    // Generate a unique id
    this.id = Math.random().toString(36).slice(2)

    // Set a lifespan for the node
    this.lifespan = this.p.random(60 * 5, 60 * 60)
    this.fadeStart = this.lifespan * 0.9
  }

  updateZDependentProperties() {
    this.size = this.p.map(this.z, -100, 100, 1, 5)
    this.color = this.p.map(
      this.z,
      -100,
      100,
      150,
      Math.round(0.299 * 22 + 0.587 * 22 + 0.114 * 29),
    )
    this.speed.z = this.p.map(Math.abs(this.z), 0, 100, 0.5, 2)

    this.speedScale = this.p.map(Math.abs(this.z), 0, 100, 0.5, 2)
  }

  move() {
    // if(this.p.frameCount % 1 === 0) {
    for (const axis of ['x', 'y', 'z']) {
      const key = axis as keyof Node['offset']
      this.speed[key] = this.p.map(
        this.p.noise(this.offset[key]),
        0,
        1,
        -0.3,
        0.3,
      )
      this.offset[key] += 0.01
    }

    // }

    this.x += this.speed.x * this.speedScale
    this.y += this.speed.y * this.speedScale
    this.z += this.speed.z

    if (this.p.frameCount % 30 === 0) {
      // if (this.z !== this.previousZ) {
      this.updateZDependentProperties()
      // }
    }
  }

  display() {
    if (this.age > this.fadeStart) {
      const fadeProgress =
        (this.age - this.fadeStart) / (this.lifespan - this.fadeStart)
      this.opacity = this.p.map(fadeProgress, 0, 1, 1, 0)
    } else {
      this.opacity = this.p.min(this.opacity + 0.01, 1)
    }

    this.p.fill(this.color, this.opacity * 255)
    this.p.noStroke()

    this.p.push()
    this.p.translate(this.x, this.y, this.z)
    this.p.sphere(this.size)
    this.p.pop()

    this.age++
  }

  isDead() {
    return this.age >= this.lifespan
  }
}

class Edge {
  opacity: number = 0

  constructor(
    public node1: Node,
    public node2: Node,
    private p: any,
  ) {}

  display() {
    const distance = this.p.dist(
      this.node1.x,
      this.node1.y,
      this.node1.z,
      this.node2.x,
      this.node2.y,
      this.node2.z,
    )

    this.opacity =
      distance > cutoff
        ? this.p.max(this.opacity - 0.01, 0)
        : this.p.min(this.opacity + 0.01, 1)

    if (this.opacity < 0.1) return

    // Calculate the minimum opacity of the two nodes connected by the edge
    const minNodeOpacity = Math.min(this.node1.opacity, this.node2.opacity)

    // Use the minimum node opacity as the edge's opacity
    this.opacity = Math.min(this.opacity, minNodeOpacity)

    // Calculate the average z value of the two nodes connected by the edge
    const avgZ = (this.node1.z + this.node2.z) / 2

    // Map the average z value to a stroke weight
    const strokeWeight = this.p.map(avgZ, -100, 100, 1, 5)

    // Map the average z value to a color
    const color = this.p.map(avgZ, -100, 100, 150, GRAYSCALE)

    // Set the stroke color and weight
    this.p.stroke(color, this.opacity * 255)
    this.p.strokeWeight(strokeWeight)

    // Draw the edge in 3D space
    this.p.line(
      this.node1.x,
      this.node1.y,
      this.node1.z,
      this.node2.x,
      this.node2.y,
      this.node2.z,
    )
  }
}

interface P5SketchProps {
  className?: string
}

const P5Sketch: React.FC<P5SketchProps> = ({ className }) => {
  const sketchRef = useRef<HTMLDivElement | null>(null)
  const sketchInstance = useRef<any>(null)

  useEffect(() => {
    import('p5').then((p5) => {
      if (sketchRef.current && !sketchInstance.current) {
        sketchInstance.current = new p5.default(sketch, sketchRef.current)
      }
    })

    return () => {
      sketchInstance.current?.remove()
      sketchInstance.current = undefined
    }
  }, [])

  return <div ref={sketchRef} className={className} />
}

export default P5Sketch
