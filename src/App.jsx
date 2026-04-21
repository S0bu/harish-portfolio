import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import TicTacToe from './components/TicTacToe'
import SnakeGame from './components/SnakeGame'
import Credits from './components/Credits'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ParticlesBg from './components/ParticlesBg'
import RetroLoader from './components/RetroLoader'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App grid-bg">
      <CustomCursor />
      <AnimatePresence>
        {loading && <RetroLoader />}
      </AnimatePresence>
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ParticlesBg />
          <Navbar />
          <LevelBanner text="LEVEL 1 — THE BEGINNING" />
          <Hero />
          <LevelBanner text="LEVEL 2 — WHO IS HARISH?" />
          <About />
          <LevelBanner text="LEVEL 3 — SKILL TREE UNLOCKED" />
          <Skills />
          <LevelBanner text="LEVEL 4 — QUEST LOG" />
          <Projects />
          <LevelBanner text="LEVEL 5 — MINI GAMES ARENA" />
          <div id="games" style={{ padding: '20px' }}>
            <motion.h2
              className="neon-text"
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: 'clamp(16px, 2.5vw, 28px)',
                textAlign: 'center',
                marginBottom: '40px',
                color: 'var(--accent-primary)'
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', bounce: 0.5 }}
            >
              ARCADE ZONE
            </motion.h2>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '40px',
              justifyContent: 'center',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <TicTacToe />
              <SnakeGame />
            </div>
          </div>
          <LevelBanner text="LEVEL 6 — FINAL BOSS: CREDITS" />
          <Credits />
          <Footer />
        </motion.div>
      )}
    </div>
  )
}

function LevelBanner({ text }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8, type: 'spring' }}
      viewport={{ once: true }}
      style={{
        background: 'linear-gradient(90deg, transparent, rgba(79,195,247,0.12), rgba(206,147,216,0.12), transparent)',
        padding: '18px',
        textAlign: 'center',
        borderTop: '1px solid rgba(79,195,247,0.4)',
        borderBottom: '1px solid rgba(206,147,216,0.4)',
        margin: '0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{
          fontFamily: "'Press Start 2P', cursive",
          fontSize: 'clamp(9px, 1.5vw, 15px)',
          color: 'var(--accent-amber)',
          textShadow: '0 0 8px var(--accent-amber)',
          letterSpacing: '3px'
        }}
      >
        // {text} //
      </motion.p>
    </motion.div>
  )
}

export default App
