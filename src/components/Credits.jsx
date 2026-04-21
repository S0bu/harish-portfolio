import React from 'react'
import { motion } from 'framer-motion'

const credits = [
  { role: 'DIRECTOR', name: 'HARISH KUMAR' },
  { role: 'CREATOR', name: 'HARISH KUMAR' },
  { role: 'DESIGNER', name: 'HARISH KUMAR' },
  { role: 'DEVELOPER', name: 'HARISH KUMAR' },
  { role: 'ANIMATOR', name: 'HARISH KUMAR' },
  { role: 'GAME DESIGNER', name: 'HARISH KUMAR' },
  { role: 'COFFEE DRINKER', name: 'HARISH KUMAR' },
  { role: 'BUG CREATOR', name: 'HARISH KUMAR' },
  { role: 'BUG FIXER', name: 'ALSO HARISH KUMAR' },
  { role: 'SPECIAL THANKS', name: 'STACK OVERFLOW' },
  { role: 'EMOTIONAL SUPPORT', name: 'COFFEE' },
  { role: 'EXECUTIVE PRODUCER', name: 'HARISH KUMAR' },
]

export default function Credits() {
  return (
    <section id="credits" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 20px',
      background: 'linear-gradient(180deg, transparent, rgba(4,6,8,0.95))',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
        pointerEvents: 'none', opacity: 0.25
      }} />

      <motion.h2
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: 'spring', bounce: 0.5 }}
        viewport={{ once: true }}
        style={{
          fontFamily: "'Bangers', cursive",
          fontSize: 'clamp(40px, 6vw, 65px)',
          color: 'var(--accent-amber)',
          textShadow: '0 0 16px var(--accent-amber)',
          marginBottom: '10px',
          letterSpacing: '5px'
        }}
      >
        CREDITS
      </motion.h2>

      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{
          fontFamily: "'VT323', monospace",
          fontSize: '20px',
          color: '#666',
          marginBottom: '40px',
          letterSpacing: '2px'
        }}
      >
        A HARISH KUMAR PRODUCTION
      </motion.p>

      <div style={{ maxWidth: '500px', width: '100%' }}>
        {credits.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, x: 8 }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '12px 20px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              alignItems: 'center'
            }}
          >
            <span style={{
              fontFamily: "'VT323', monospace",
              fontSize: '18px',
              color: '#555',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {c.role}
            </span>
            <motion.span
              animate={c.name.includes('STACK') ? {
                color: ['var(--accent-secondary)', 'var(--accent-primary)', 'var(--accent-green)']
              } : {}}
              transition={{ duration: 2.5, repeat: Infinity }}
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '9px',
                color: '#ddd',
                textShadow: '0 0 5px var(--accent-secondary)'
              }}
            >
              {c.name}
            </motion.span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        viewport={{ once: true }}
        style={{ marginTop: '50px', textAlign: 'center' }}
      >
        <motion.p
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '11px',
            color: 'var(--accent-green)',
            textShadow: '0 0 12px var(--accent-green)',
            marginBottom: '10px'
          }}
        >
          NO ANIMALS WERE HARMED
        </motion.p>
        <p style={{
          fontFamily: "'VT323', monospace",
          fontSize: '18px',
          color: '#444'
        }}>
          (Several keyboards were, though)
        </p>
      </motion.div>
    </section>
  )
}
