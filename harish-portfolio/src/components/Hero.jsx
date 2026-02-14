import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text3D, Center, Float, Stars, OrbitControls } from '@react-three/drei'

function SpinningLogo() {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.5
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
  })
  return (
    <group ref={ref}>
      <mesh>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial
          color="#ff00ff"
          emissive="#ff00ff"
          emissiveIntensity={0.5}
          wireframe
        />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.8}
          wireframe
        />
      </mesh>
    </group>
  )
}

function FloatingShapes() {
  const shapes = [
    { pos: [-3, 2, -2], color: '#39ff14', geo: 'box' },
    { pos: [3, -1, -3], color: '#ffff00', geo: 'octahedron' },
    { pos: [-2, -2, -1], color: '#ff6600', geo: 'dodecahedron' },
    { pos: [2, 2, -2], color: '#ff00ff', geo: 'tetrahedron' },
  ]
  return shapes.map((s, i) => (
    <Float key={i} speed={2 + i} rotationIntensity={2} floatIntensity={2}>
      <mesh position={s.pos}>
        {s.geo === 'box' && <boxGeometry args={[0.5, 0.5, 0.5]} />}
        {s.geo === 'octahedron' && <octahedronGeometry args={[0.4]} />}
        {s.geo === 'dodecahedron' && <dodecahedronGeometry args={[0.4]} />}
        {s.geo === 'tetrahedron' && <tetrahedronGeometry args={[0.4]} />}
        <meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={0.5} wireframe />
      </mesh>
    </Float>
  ))
}

export default function Hero() {
  const roles = ['Web Developer', 'Game Creator', 'Android Dev', 'Designer', 'Code Wizard']

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 3D Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} color="#ff00ff" intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#00ffff" intensity={1} />
          <Stars radius={100} depth={50} count={3000} factor={4} fade speed={2} />
          <SpinningLogo />
          <FloatingShapes />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content overlay */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '20px' }}>
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
        >
          <h1
            className="glitch-text"
            style={{
              fontFamily: "'Bangers', cursive",
              fontSize: 'clamp(50px, 10vw, 120px)',
              background: 'linear-gradient(45deg, #ff00ff, #00ffff, #39ff14, #ffff00, #ff00ff)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'glitchColor 0.3s infinite, gradientShift 3s ease infinite',
              letterSpacing: '5px',
              lineHeight: 1.1
            }}
          >
            HARISH
          </h1>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 'clamp(16px, 3vw, 30px)',
              color: '#ff00ff',
              textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff',
              marginTop: '10px'
            }}
          >
            KUMAR
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: '30px' }}
        >
          <RoleTyper roles={roles} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#projects" className="retro-btn">VIEW QUESTS</a>
          <a href="#games" className="retro-btn" style={{ borderColor: '#ff00ff', color: '#ff00ff', textShadow: '0 0 10px #ff00ff', boxShadow: '0 0 10px #ff00ff, inset 0 0 10px rgba(255,0,255,0.1)' }}>
            PLAY GAMES
          </a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ marginTop: '60px', fontSize: '30px' }}
        >
          ⬇️
        </motion.div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}

function RoleTyper({ roles }) {
  const [index, setIndex] = React.useState(0)
  const [text, setText] = React.useState('')
  const [deleting, setDeleting] = React.useState(false)

  React.useEffect(() => {
    const current = roles[index]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length === current.length) {
          setTimeout(() => setDeleting(true), 1500)
        }
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length === 0) {
          setDeleting(false)
          setIndex((index + 1) % roles.length)
        }
      }
    }, deleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [text, deleting, index, roles])

  return (
    <p style={{
      fontFamily: "'VT323', monospace",
      fontSize: 'clamp(20px, 4vw, 40px)',
      color: '#39ff14',
      textShadow: '0 0 10px #39ff14, 0 0 20px #39ff14'
    }}>
      {'> '}{text}<span style={{ animation: 'blink 0.7s infinite' }}>_</span>
      <style>{`@keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
    </p>
  )
}
