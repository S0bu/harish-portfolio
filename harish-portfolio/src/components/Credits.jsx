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
      background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.9))',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Film grain overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
        pointerEvents: 'none',
        opacity: 0.3
      }} />

      <motion.h2
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: 'spring', bounce: 0.5 }}
        viewport={{ once: true }}
        style={{
          fontFamily: "'Bangers', cursive",
          fontSize: 'clamp(40px, 6vw, 70px)',
          color: '#ffff00',
          textShadow: '0 0 20px #ffff00, 0 0 40px #ffff00',
          marginBottom: '10px',
          letterSpacing: '5px'
        }}
      >
        CREDITS
      </motion.h2>

      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          fontFamily: "'VT323', monospace",
          fontSize: '20px',
          color: '#aaa',
          marginBottom: '40px'
        }}
      >
        A HARISH KUMAR PRODUCTION
      </motion.p>

      <div style={{
        maxWidth: '500px',
        width: '100%'
      }}>
        {credits.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, x: 10 }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '12px 20px',
              borderBottom: '1px solid #333',
              alignItems: 'center'
            }}
          >
            <span style={{
              fontFamily: "'VT323', monospace",
              fontSize: '18px',
              color: '#888',
              textTransform: 'uppercase'
            }}>
              {c.role}
            </span>
            <motion.span
              animate={c.name.includes('STACK') ? { color: ['#ff00ff', '#00ffff', '#39ff14'] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '10px',
                color: '#fff',
                textShadow: '0 0 5px #ff00ff'
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
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '12px',
            color: '#39ff14',
            textShadow: '0 0 15px #39ff14',
            marginBottom: '10px'
          }}
        >
          NO ANIMALS WERE HARMED
        </motion.p>
        <p style={{
          fontFamily: "'VT323', monospace",
          fontSize: '18px',
          color: '#666'
        }}>
          (Several keyboards were, though)
        </p>
      </motion.div>
    </section>
  )
}
