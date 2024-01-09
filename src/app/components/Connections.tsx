'use client'

import { useEffect, useRef } from 'react'

const GRAYSCALE = Math.round(0.299 * 22 + 0.587 * 22 + 0.114 * 29)

const distanceSquare = (
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
) => {
  return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2)
}

const sketch = (p: any) => {
  let nodes = new Map<number, Node>()
  let cutoff: number = 0

  p.setup = () => {
    const renderer = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
    const canvas = renderer.canvas

    if (canvas) {
      const context = canvas.getContext('webgl', { antialias: true })
      if (context) renderer.drawingContext = context
    }

    // cutoff is the distance between nodes that determines whether an edge should be created
    cutoff = distanceSquare(p.windowWidth, p.windowHeight, 200, 0, 0, 0)

    for (let i = 0; i < 100; i++) {
      nodes.set(i, createNewNode(i))

      // Create edges between nodes within cutoff distance. Avoid creating an edge between a node and itself
      for (const node of nodes.values()) {
        // do not connect a node to itself
        if (node.id === i) continue
        if (shouldCreateEdge(nodes.get(i)!, node)) {
          const edge = new Edge(p)
          nodes.get(i)!.adjacencyList.set(node.id, edge)
        }
      }
    }
  }

  p.draw = () => {
    p.background(10)

    // Draw nodes
    for (const node of nodes.values()) {
      if (p.frameCount % 60 === 0 && node.isDead()) {
        handleDeadNode(node)
      }

      node.move()

      // Draw edges
      for (const [id, edge] of node.adjacencyList) {
        edge.display(node, nodes.get(id)!)
      }

      node.display()
    }
  }

  function handleDeadNode(node: Node) {
    // Reset the node
    node.reset()

    // remove the node from the adjacency list of other nodes
    for (const otherNode of nodes.values()) {
      if (otherNode.id === node.id) continue
      otherNode.adjacencyList.delete(node.id)
    }

    // Create edges between the new node and other nodes within cutoff distance
    for (const otherNode of nodes.values()) {
      if (otherNode.id === node.id) continue
      if (shouldCreateEdge(node, otherNode)) {
        const edge = new Edge(p)
        node.adjacencyList.set(otherNode.id, edge)
      }
    }
  }

  // Create nodes with random id, x, y, and z values
  function createNewNode(id: number) {
    return new Node(
      id,
      p.random(-p.width / 2, p.width / 2),
      p.random(-p.height / 2 + 100, p.height / 2),
      p.random(-100, 100),
      p,
    )
  }

  // Create edges between nodes that are within a certain distance of each other
  function shouldCreateEdge(node1: Node, node2: Node) {
    return (
      distanceSquare(node1.x, node1.y, node1.z, node2.x, node2.y, node2.z) <
      cutoff * 0.0075
    )
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
    cutoff = distanceSquare(p.windowWidth, p.windowHeight, 200, 0, 0, 0)
  }

  p.remove = () => {
    nodes = new Map()
    // edges = new Map()
  }
}

class Node {
  adjacencyList: Map<number, Edge> = new Map()
  offset: { x: number; y: number; z: number }
  size: number = 0
  color: number = 0
  lifespan: number
  age: number = 0
  fadeStart: number
  opacity: number = 0
  speed: { x: number; y: number; z: number } = { x: 0, y: 0, z: 0 }
  speedScale: number = 0
  updateTime = Math.floor(Math.random() * 30) + 30

  constructor(
    public id: number,
    public x: number,
    public y: number,
    public z: number,
    private p: any,
  ) {
    this.offset = { x: p.random(1000), y: p.random(1000), z: p.random(1000) }

    this.updateZDependentProperties()

    // Set a lifespan for the node
    this.lifespan = this.p.random(60 * 5, 60 * 60)
    this.fadeStart = this.lifespan * 0.9
  }

  reset() {
    this.age = 0
    this.opacity = 0
    this.x = this.p.random(-this.p.width / 2, this.p.width / 2)
    this.y = this.p.random(-this.p.height / 2 + 100, this.p.height / 2)
    this.z = this.p.random(-100, 100)
    this.offset = {
      x: this.p.random(1000),
      y: this.p.random(1000),
      z: this.p.random(1000),
    }
    this.speed = { x: 0, y: 0, z: 0 }
    this.speedScale = 0
    this.size = 0
    this.color = 0
    this.updateZDependentProperties()
    this.lifespan = this.p.random(60 * 5, 60 * 60)
    this.fadeStart = this.lifespan * 0.9
    this.adjacencyList = new Map()
  }

  updateZDependentProperties() {
    this.size = this.p.map(this.z, -100, 100, 1, 5)
    this.color = this.p.map(this.z, -100, 100, 150, GRAYSCALE)
    this.speed.z = this.p.map(Math.abs(this.z), 0, 100, 0.5, 2)

    this.speedScale = this.p.map(Math.abs(this.z), 0, 100, 0.5, 2)
  }

  move() {
    for (const axis of ['x', 'y', 'z']) {
      this.speed[axis as keyof Node['speed']] = this.p.map(
        this.p.noise(this.offset[axis as keyof Node['offset']]),
        0,
        1,
        -0.3,
        0.3,
      )
      this.offset[axis as keyof Node['offset']] += 0.01
    }

    this.x += this.speed.x * this.speedScale
    this.y += this.speed.y * this.speedScale
    this.z += this.speed.z

    if (this.p.frameCount % this.updateTime === 0) {
      this.updateZDependentProperties()
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

  constructor(private p: any) {}

  display(node1: Node, node2: Node) {
    const distance = this.p.dist(
      node1.x,
      node1.y,
      node1.z,
      node2.x,
      node2.y,
      node2.z,
    )

    this.opacity =
      distance > this.p.cutoff
        ? this.p.max(this.opacity - 0.01, 0)
        : this.p.min(this.opacity + 0.01, 1)

    if (this.opacity < 0.1) return

    // Use the minimum node opacity as the edge's opacity
    this.opacity = Math.min(
      this.opacity,
      Math.min(node1.opacity, node2.opacity),
    )

    // Calculate the average z value of the two nodes connected by the edge
    const avgZ = (node1.z + node2.z) / 2

    // Map the average z value to a stroke weight
    const strokeWeight = this.p.map(avgZ, -100, 100, 1, 5)

    // Map the average z value to a color
    const color = this.p.map(avgZ, -100, 100, 150, GRAYSCALE)

    // Set the stroke color and weight
    this.p.stroke(color, this.opacity * 255)
    this.p.strokeWeight(strokeWeight)

    // Draw the edge in 3D space
    this.p.line(node1.x, node1.y, node1.z, node2.x, node2.y, node2.z)
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
