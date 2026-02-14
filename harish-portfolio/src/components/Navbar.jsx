import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: '🏠 HOME', href: '#hero' },
  { label: '👾 ABOUT', href: '#about' },
  { label: '⚡ SKILLS', href: '#skills' },
  { label: '🚀 PROJECTS', href: '#projects' },
  { label: '🎮 GAMES', href: '#games' },
  { label: '🎬 CREDITS', href: '#credits' }
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
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled ? 'rgba(0,0,0,0.9)' : 'transparent',
        borderBottom: scrolled ? '2px solid #ff00ff' : 'none',
        boxShadow: scrolled ? '0 0 20px rgba(255,0,255,0.3)' : 'none',
        transition: 'all 0.3s',
        backdropFilter: scrolled ? 'blur(10px)' : 'none'
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
        style={{
          fontFamily: "'Bangers', cursive",
          fontSize: '28px',
          background: 'linear-gradient(45deg, #ff00ff, #00ffff, #39ff14, #ffff00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          cursor: 'pointer',
          letterSpacing: '3px',
          filter: 'drop-shadow(0 0 10px #ff00ff)'
        }}
      >
        {'<HK/>'}
      </motion.div>

      {/* Desktop links */}
      <div style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center'
      }}
        className="nav-desktop"
      >
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{
              scale: 1.2,
              textShadow: '0 0 15px #00ffff'
            }}
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '9px',
              letterSpacing: '1px',
              padding: '8px 12px',
              borderRadius: '5px',
              transition: 'all 0.3s'
            }}
          >
            {link.label}
          </motion.a>
        ))}
      </div>

      {/* Mobile menu button */}
      <motion.button
        className="nav-mobile-btn"
        whileTap={{ scale: 0.9 }}
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: '2px solid #00ffff',
          color: '#00ffff',
          fontSize: '24px',
          cursor: 'pointer',
          padding: '5px 10px',
          borderRadius: '5px'
        }}
      >
        {menuOpen ? '✕' : '☰'}
      </motion.button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(0,0,0,0.95)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              borderBottom: '2px solid #ff00ff'
            }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: '#fff',
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
