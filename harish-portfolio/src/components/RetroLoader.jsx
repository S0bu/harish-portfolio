import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function RetroLoader() {
  const [progress, setProgress] = useState(0)
  const [text, setText] = useState('BOOTING SYSTEM...')

  useEffect(() => {
    const messages = [
      'BOOTING SYSTEM...',
      'LOADING HARISH.EXE...',
      'INITIALIZING FUNKY MODE...',
      'ACTIVATING NEON LIGHTS...',
      'DEPLOYING AWESOMENESS...',
      'READY PLAYER ONE!'
    ]
    const interval = setInterval(() => {
      setProgress(p => {
        const next = p + Math.random() * 15 + 5
        const idx = Math.min(Math.floor(next / 20), messages.length - 1)
        setText(messages[idx])
        return next >= 100 ? 100 : next
      })
    }, 200)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.5 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        fontFamily: "'Press Start 2P', cursive"
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        style={{
          fontSize: '60px',
          marginBottom: '30px',
          filter: 'drop-shadow(0 0 20px #ff00ff)'
        }}
      >
        🕹️
      </motion.div>
      <motion.p
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        style={{
          color: '#00ffff',
          fontSize: '14px',
          marginBottom: '30px',
          textShadow: '0 0 10px #00ffff'
        }}
      >
        {text}
      </motion.p>
      <div style={{
        width: '300px',
        height: '20px',
        border: '2px solid #00ffff',
        boxShadow: '0 0 10px #00ffff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <motion.div
          animate={{ width: `${progress}%` }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #ff00ff, #00ffff, #39ff14)',
            boxShadow: '0 0 20px #00ffff'
          }}
        />
      </div>
      <p style={{
        color: '#39ff14',
        fontSize: '10px',
        marginTop: '10px',
        textShadow: '0 0 5px #39ff14'
      }}>
        {Math.floor(progress)}%
      </p>
    </motion.div>
  )
}
