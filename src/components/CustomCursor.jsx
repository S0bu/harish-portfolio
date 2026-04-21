import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState([])

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setTrail(prev => [...prev.slice(-12), { x: e.clientX, y: e.clientY, id: Date.now() }])
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      {trail.map((t, i) => (
        <motion.div
          key={t.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            left: t.x - 4,
            top: t.y - 4,
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: `hsl(${(i * 30) % 360}, 100%, 50%)`,
            pointerEvents: 'none',
            zIndex: 10000,
            boxShadow: `0 0 10px hsl(${(i * 30) % 360}, 100%, 50%)`
          }}
        />
      ))}
      <motion.div
        animate={{ x: pos.x - 10, y: pos.y - 10 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        style={{
          position: 'fixed',
          width: 20,
          height: 20,
          border: '2px solid #00ffff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10001,
          boxShadow: '0 0 15px #00ffff, 0 0 30px #ff00ff',
          mixBlendMode: 'difference'
        }}
      />
    </>
  )
}
