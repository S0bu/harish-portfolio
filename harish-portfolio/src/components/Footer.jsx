import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={{
      padding: '40px 20px',
      textAlign: 'center',
      borderTop: '1px solid rgba(206,147,216,0.3)',
      background: 'rgba(4,6,8,0.95)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Marquee */}
      <div style={{
        overflow: 'hidden',
        marginBottom: '24px',
        padding: '10px 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <motion.p
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '9px',
            color: 'var(--accent-amber)',
            whiteSpace: 'nowrap',
            textShadow: '0 0 4px var(--accent-amber)',
            letterSpacing: '2px'
          }}
        >
          // THANKS FOR VISITING // HARISH KUMAR // WEB DEV // GAME DEV // ANDROID DEV // DESIGNER // KEEP CODING // STAY SHARP // PLAYER ONE //
        </motion.p>
      </div>

      <motion.div
        whileHover={{ scale: 1.08 }}
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: '22px',
          fontWeight: 700,
          color: 'var(--accent-primary)',
          textShadow: '0 0 10px var(--accent-primary)',
          marginBottom: '20px',
          cursor: 'pointer',
          letterSpacing: '3px'
        }}
      >
        {'<HARISH KUMAR/>'}
      </motion.div>

      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
        {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((link) => (
          <motion.a
            key={link}
            href="#"
            whileHover={{ scale: 1.15, color: 'var(--accent-primary)' }}
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: '18px',
              color: '#555',
              textDecoration: 'none',
              transition: 'color 0.3s',
              letterSpacing: '1px'
            }}
          >
            {link}
          </motion.a>
        ))}
      </div>

      <p style={{
        fontFamily: "'VT323', monospace",
        fontSize: '16px',
        color: '#383838',
        letterSpacing: '1px'
      }}>
        (c) 2026 HARISH KUMAR — BUILT WITH PASSION AND CAFFEINE
      </p>

      <motion.p
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        style={{
          fontFamily: "'Press Start 2P', cursive",
          fontSize: '7px',
          color: '#2a2a2a',
          marginTop: '12px',
          letterSpacing: '1px'
        }}
      >
        KONAMI CODE DOES NOTHING HERE... OR DOES IT?
      </motion.p>
    </footer>
  )
}
