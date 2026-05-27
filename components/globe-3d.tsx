"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Line } from "@react-three/drei"
import * as THREE from "three"

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null)
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.Group>(null)

  const points = useMemo(() => {
    const pts: THREE.Vector3[] = []
    const count = 200
    for (let i = 0; i < count; i++) {
      const lat = Math.acos(2 * Math.random() - 1) - Math.PI / 2
      const lon = 2 * Math.PI * Math.random()
      const radius = 2
      const x = radius * Math.cos(lat) * Math.cos(lon)
      const y = radius * Math.cos(lat) * Math.sin(lon)
      const z = radius * Math.sin(lat)
      pts.push(new THREE.Vector3(x, y, z))
    }
    return pts
  }, [])

  const connections = useMemo(() => {
    const conns: [THREE.Vector3, THREE.Vector3][] = []
    const connectionCount = 50
    for (let i = 0; i < connectionCount; i++) {
      const p1 = points[Math.floor(Math.random() * points.length)]
      const p2 = points[Math.floor(Math.random() * points.length)]
      if (p1.distanceTo(p2) < 2) {
        conns.push([p1, p2])
      }
    }
    return conns
  }, [points])

  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(points.length * 3)
    points.forEach((p, i) => {
      positions[i * 3] = p.x
      positions[i * 3 + 1] = p.y
      positions[i * 3 + 2] = p.z
    })
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    return geometry
  }, [points])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group>
      <Sphere ref={meshRef} args={[1.95, 64, 64]}>
        <meshBasicMaterial
          color="#111827"
          transparent
          opacity={0.8}
        />
      </Sphere>
      
      <Sphere args={[1.96, 64, 64]}>
        <meshBasicMaterial
          color="#2563EB"
          wireframe
          transparent
          opacity={0.1}
        />
      </Sphere>

      <points ref={pointsRef} geometry={particleGeometry}>
        <pointsMaterial
          size={0.03}
          color="#00E5FF"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      <group ref={linesRef}>
        {connections.map((conn, i) => (
          <Line
            key={i}
            points={[conn[0], conn[1]]}
            color="#2563EB"
            lineWidth={0.5}
            transparent
            opacity={0.3}
          />
        ))}
      </group>
    </group>
  )
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  
  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const count = 500
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    return geometry
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={particlesRef} geometry={particleGeometry}>
      <pointsMaterial
        size={0.02}
        color="#8B5CF6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export function Globe3D() {
  return (
    <div className="absolute inset-0 opacity-70">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Globe />
        <FloatingParticles />
      </Canvas>
    </div>
  )
}
