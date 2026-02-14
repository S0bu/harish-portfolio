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
  const [level, setLevel] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      setLevel(1)
    }, 3500)
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
          <LevelBanner level={1} text="LEVEL 1 — THE BEGINNING" />
          <Hero />
          <LevelBanner level={2} text="LEVEL 2 — WHO IS HARISH?" />
          <About />
          <LevelBanner level={3} text="LEVEL 3 — SKILL TREE UNLOCKED" />
          <Skills />
          <LevelBanner level={4} text="LEVEL 4 — QUEST LOG" />
          <Projects />
          <LevelBanner level={5} text="LEVEL 5 — MINI GAMES ARENA" />
          <div id="games" style={{ padding: '20px' }}>
            <motion.h2
              className="neon-text"
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: 'clamp(18px, 3vw, 32px)',
                textAlign: 'center',
                marginBottom: '40px',
                color: '#00ffff'
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', bounce: 0.5 }}
            >
              🎮 ARCADE ZONE 🎮
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
          <LevelBanner level={6} text="LEVEL 6 — FINAL BOSS: CREDITS" />
          <Credits />
          <Footer />
        </motion.div>
      )}
    </div>
  )
}

function LevelBanner({ level, text }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8, type: 'spring' }}
      viewport={{ once: true }}
      style={{
        background: 'linear-gradient(90deg, transparent, rgba(255,0,255,0.3), rgba(0,255,255,0.3), transparent)',
        padding: '20px',
        textAlign: 'center',
        borderTop: '2px solid #ff00ff',
        borderBottom: '2px solid #00ffff',
        margin: '0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          fontFamily: "'Press Start 2P', cursive",
          fontSize: 'clamp(10px, 2vw, 18px)',
          color: '#ffff00',
          textShadow: '0 0 10px #ffff00, 0 0 20px #ffff00',
          letterSpacing: '3px'
        }}
      >
        ★ {text} ★
      </motion.p>
    </motion.div>
  )
}

export default App
