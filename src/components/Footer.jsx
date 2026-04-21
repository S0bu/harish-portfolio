import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false)
  const [copiedMessage, setCopiedMessage] = useState(false)

  const handleEmailCopy = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText('harish.memo@gmail.com')
    setCopiedMessage(true)
    setTimeout(() => setCopiedMessage(false), 2000)
  }
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
        {[
          { label: 'GitHub', href: 'https://github.com/S0bu/' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/harish-ku/' },
          { label: 'Twitter', href: '#', onClick: () => setShowPopup(true), onAuxClick: () => setShowPopup(true) },
          { label: 'Email', href: '#', onClick: handleEmailCopy, onAuxClick: handleEmailCopy }
        ].map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            onClick={(e) => {
              if (link.onClick) {
                e.preventDefault()
                link.onClick(e)
              }
            }}
            onAuxClick={(e) => {
              if (link.onAuxClick) {
                e.preventDefault()
                link.onAuxClick(e)
              } else if (link.onClick && e.button === 1) {
                e.preventDefault()
              }
            }}
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
            {link.label}
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

      <AnimatePresence>
        {copiedMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              background: 'rgba(79,195,247,0.9)',
              color: '#000',
              padding: '12px 20px',
              borderRadius: '4px',
              fontFamily: "'VT323', monospace",
              fontSize: '14px',
              fontWeight: 'bold',
              zIndex: 9998,
              boxShadow: '0 0 15px rgba(79,195,247,0.5)'
            }}
          >
            Copied Email-ID to clipboard!
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.7)',
              zIndex: 9999
            }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'rgba(8,12,20,0.95)',
                border: '2px solid var(--accent-primary)',
                borderRadius: '8px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 0 20px rgba(79,195,247,0.3)',
                minWidth: '300px'
              }}
            >
              <p style={{
                fontFamily: "'VT323', monospace",
                fontSize: '20px',
                color: 'var(--accent-primary)',
                marginBottom: '20px',
                letterSpacing: '1px'
              }}>
                Sorry, does not exist
              </p>
              <button
                onClick={() => setShowPopup(false)}
                style={{
                  background: 'var(--accent-primary)',
                  border: 'none',
                  color: '#000',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontFamily: "'VT323', monospace",
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}
