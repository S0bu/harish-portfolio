import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function RetroLoader() {
  const [progress, setProgress] = useState(0)
  const [text, setText] = useState('BOOTING SYSTEM...')

  useEffect(() => {
    const messages = [
      'BOOTING SYSTEM...',
      'LOADING HARISH.EXE...',
      'INITIALIZING MODULES...',
      'ACTIVATING INTERFACE...',
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
      exit={{ opacity: 0, scale: 1.4 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#040608',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        fontFamily: "'Press Start 2P', cursive"
      }}
    >
      {/* Logo mark instead of emoji */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
        style={{
          width: '64px',
          height: '64px',
          marginBottom: '30px',
          border: '3px solid var(--accent-primary)',
          borderTopColor: 'var(--accent-secondary)',
          borderRadius: '50%',
          boxShadow: '0 0 20px var(--accent-primary)',
          filter: 'drop-shadow(0 0 12px var(--accent-primary))'
        }}
      />

      <motion.p
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        style={{
          color: 'var(--accent-primary)',
          fontSize: '11px',
          marginBottom: '30px',
          textShadow: '0 0 8px var(--accent-primary)',
          letterSpacing: '2px'
        }}
      >
        {text}
      </motion.p>

      <div style={{
        width: '300px',
        height: '16px',
        border: '1px solid var(--accent-primary)',
        boxShadow: '0 0 8px var(--accent-primary)',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '3px'
      }}>
        <motion.div
          animate={{ width: `${progress}%` }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, var(--accent-secondary), var(--accent-primary), var(--accent-green))',
            boxShadow: '0 0 16px var(--accent-primary)'
          }}
        />
      </div>

      <p style={{
        color: 'var(--accent-green)',
        fontSize: '9px',
        marginTop: '12px',
        textShadow: '0 0 5px var(--accent-green)',
        letterSpacing: '1px'
      }}>
        {Math.floor(progress)}%
      </p>
    </motion.div>
  )
}
