import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={{
      padding: '40px 20px',
      textAlign: 'center',
      borderTop: '2px solid #ff00ff',
      background: 'rgba(0,0,0,0.9)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Marquee */}
      <div style={{
        overflow: 'hidden',
        marginBottom: '20px',
        padding: '10px 0',
        borderTop: '1px solid #333',
        borderBottom: '1px solid #333'
      }}>
        <motion.p
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '10px',
            color: '#ffff00',
            whiteSpace: 'nowrap',
            textShadow: '0 0 5px #ffff00'
          }}
        >
          ★ THANKS FOR VISITING ★ HARISH KUMAR ★ WEB DEV ★ GAME DEV ★ ANDROID DEV ★ DESIGNER ★ KEEP CODING ★ STAY FUNKY ★ PLAYER ONE ★
        </motion.p>
      </div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        style={{
          fontFamily: "'Bangers', cursive",
          fontSize: '32px',
          background: 'linear-gradient(45deg, #ff00ff, #00ffff, #39ff14)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '15px',
          cursor: 'pointer'
        }}
      >
        {'<HARISH KUMAR/>'}
      </motion.div>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '20px' }}>
        {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((link, i) => (
          <motion.a
            key={link}
            href="#"
            whileHover={{ scale: 1.2, color: '#00ffff' }}
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: '18px',
              color: '#888',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}
          >
            {link}
          </motion.a>
        ))}
      </div>

      <p style={{
        fontFamily: "'VT323', monospace",
        fontSize: '16px',
        color: '#555'
      }}>
        © 2026 HARISH KUMAR | BUILT WITH ❤️ AND ☕
      </p>

      <motion.p
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          fontFamily: "'Press Start 2P', cursive",
          fontSize: '8px',
          color: '#333',
          marginTop: '10px'
        }}
      >
        KONAMI CODE DOES NOTHING HERE... OR DOES IT?
      </motion.p>
    </footer>
  )
}
