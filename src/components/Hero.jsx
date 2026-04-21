import React from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Float, Stars, OrbitControls } from '@react-three/drei'

function FloatingShapes() {
  const shapes = [
    { pos: [-3, 2, -2], color: '#80cbc4', geo: 'box' },
    { pos: [3, -1, -3], color: '#ffd54f', geo: 'octahedron' },
    { pos: [-2, -2, -1], color: '#ff8a65', geo: 'dodecahedron' },
    { pos: [2, 2, -2], color: '#9575cd', geo: 'tetrahedron' },
  ]
  return shapes.map((s, i) => (
    <Float key={i} speed={2 + i} rotationIntensity={1.5} floatIntensity={1.5}>
      <mesh position={s.pos}>
        {s.geo === 'box' && <boxGeometry args={[0.5, 0.5, 0.5]} />}
        {s.geo === 'octahedron' && <octahedronGeometry args={[0.4]} />}
        {s.geo === 'dodecahedron' && <dodecahedronGeometry args={[0.4]} />}
        {s.geo === 'tetrahedron' && <tetrahedronGeometry args={[0.4]} />}
        <meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={0.4} wireframe />
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
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} color="#ce93d8" intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#4fc3f7" intensity={1} />
          <Stars radius={100} depth={50} count={3000} factor={4} fade speed={1.5} />
          <FloatingShapes />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
        </Canvas>
      </div>

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
              background: 'linear-gradient(45deg, var(--accent-secondary), var(--accent-primary), var(--accent-green), var(--accent-amber), var(--accent-secondary))',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'glitchColor 0.3s infinite, gradientShift 4s ease infinite',
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
              fontSize: 'clamp(14px, 2.5vw, 26px)',
              color: 'var(--accent-secondary)',
              textShadow: '0 0 10px var(--accent-secondary)',
              marginTop: '10px',
              letterSpacing: '8px'
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
          <a
            href="#games"
            className="retro-btn"
            style={{
              borderColor: 'var(--accent-secondary)',
              color: 'var(--accent-secondary)',
              textShadow: '0 0 8px var(--accent-secondary)',
              boxShadow: '0 0 8px rgba(206,147,216,0.25), inset 0 0 8px rgba(206,147,216,0.05)'
            }}
          >
            PLAY GAMES
          </a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{ marginTop: '60px' }}
        >
          <span style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '10px',
            color: 'var(--text-muted)',
            letterSpacing: '2px'
          }}>
            SCROLL DOWN
          </span>
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
        if (text.length === current.length) setTimeout(() => setDeleting(true), 1500)
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
      color: 'var(--accent-green)',
      textShadow: '0 0 8px var(--accent-green)'
    }}>
      {'> '}{text}<span style={{ animation: 'blink 0.7s infinite' }}>_</span>
      <style>{`@keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
    </p>
  )
}
