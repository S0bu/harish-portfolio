import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'HOME', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'GAMES', href: '#games' },
  { label: 'CREDITS', href: '#credits' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', bounce: 0.4 }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled ? 'rgba(8,12,20,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(79,195,247,0.3)' : 'none',
        boxShadow: scrolled ? '0 0 20px rgba(79,195,247,0.1)' : 'none',
        transition: 'all 0.3s',
        backdropFilter: scrolled ? 'blur(12px)' : 'none'
      }}
    >
      <motion.div
        whileHover={{ scale: 1.08 }}
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: '20px',
          fontWeight: 700,
          color: 'var(--accent-primary)',
          cursor: 'pointer',
          letterSpacing: '3px',
          textShadow: '0 0 10px var(--accent-primary)'
        }}
      >
        {'<HK/>'}
      </motion.div>

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }} className="nav-desktop">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.15, color: 'var(--accent-primary)' }}
            style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '8px',
              letterSpacing: '1px',
              padding: '8px 10px',
              borderRadius: '4px',
              transition: 'all 0.2s'
            }}
          >
            {link.label}
          </motion.a>
        ))}
      </div>

      <motion.button
        className="nav-mobile-btn"
        whileTap={{ scale: 0.9 }}
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: '1px solid var(--accent-primary)',
          color: 'var(--accent-primary)',
          fontSize: '18px',
          cursor: 'pointer',
          padding: '5px 10px',
          borderRadius: '4px',
          fontFamily: 'monospace'
        }}
      >
        {menuOpen ? 'X' : '='}
      </motion.button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%', left: 0, right: 0,
              background: 'rgba(8,12,20,0.97)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              borderBottom: '1px solid rgba(79,195,247,0.3)'
            }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: '10px',
                  padding: '10px'
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}
