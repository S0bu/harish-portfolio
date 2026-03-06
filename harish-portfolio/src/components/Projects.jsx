import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'NEON RUNNER',
    desc: 'A fast-paced endless runner game with retro neon aesthetics and procedural generation.',
    tags: ['Unity', 'C#', 'Game Design'],
    color: '#39ff14',
    type: 'GAME'
  },
  {
    title: 'PIXEL CHAT',
    desc: 'Real-time messaging app with pixel art avatars and retro UI. Built for the nostalgic.',
    tags: ['React', 'Firebase', 'Node.js'],
    color: '#00ffff',
    type: 'WEB APP'
  },
  {
    title: 'DROID BEATS',
    desc: 'Android music player with visualizer, gesture controls, and AI-powered playlists.',
    tags: ['Kotlin', 'Jetpack Compose', 'ML Kit'],
    color: '#ff00ff',
    type: 'ANDROID'
  },
  {
    title: 'SPACE TRADER',
    desc: 'Intergalactic trading simulator. Buy low, sell high, dodge pirates. Classic gameplay.',
    tags: ['Godot', 'GDScript', 'Pixel Art'],
    color: '#ffff00',
    type: 'GAME'
  },
  {
    title: 'RETRO FOLIO',
    desc: 'This very portfolio you are looking at. Meta, right? Built with React + Three.js.',
    tags: ['React', 'Three.js', 'Framer Motion'],
    color: '#ff6600',
    type: 'WEB'
  },
  {
    title: 'FIT QUEST',
    desc: 'Gamified fitness tracker for Android. Earn XP, level up, defeat the couch boss.',
    tags: ['Kotlin', 'Room DB', 'Material 3'],
    color: '#8b00ff',
    type: 'ANDROID'
  }
]

export default function Projects() {
  return (
    <section id="projects" style={{
      minHeight: '100vh',
      padding: '80px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <motion.h2
        className="neon-text-green"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.5 }}
        viewport={{ once: true }}
        style={{
          fontFamily: "'Bangers', cursive",
          fontSize: 'clamp(40px, 6vw, 70px)',
          color: '#39ff14',
          textAlign: 'center',
          marginBottom: '50px',
          letterSpacing: '5px'
        }}
      >
        QUEST LOG
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '25px',
        maxWidth: '1200px',
        width: '100%'
      }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 80, rotateY: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay: i * 0.1, type: 'spring', bounce: 0.3 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -15,
              boxShadow: `0 0 40px ${p.color}60`
            }}
            style={{
              border: `2px solid ${p.color}`,
              borderRadius: '15px',
              padding: '25px',
              background: 'rgba(0,0,0,0.85)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Type badge */}
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '8px',
              padding: '4px 8px',
              background: p.color,
              color: '#000',
              borderRadius: '3px'
            }}>
              {p.type}
            </div>

            <motion.span
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ fontSize: '50px', display: 'block', marginBottom: '15px' }}
            >
              {p.emoji}
            </motion.span>

            <h3 style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '14px',
              color: p.color,
              textShadow: `0 0 10px ${p.color}`,
              marginBottom: '10px'
            }}>
              {p.title}
            </h3>

            <p style={{
              fontFamily: "'VT323', monospace",
              fontSize: '18px',
              color: '#ccc',
              lineHeight: 1.5,
              marginBottom: '15px'
            }}>
              {p.desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {p.tags.map(tag => (
                <span key={tag} style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: '14px',
                  padding: '3px 10px',
                  border: `1px solid ${p.color}50`,
                  borderRadius: '10px',
                  color: p.color,
                  background: `${p.color}10`
                }}>
                  #{tag}
                </span>
              ))}
            </div>

            {/* Hover glow line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: `linear-gradient(90deg, transparent, ${p.color}, transparent)`,
                transformOrigin: 'left'
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
