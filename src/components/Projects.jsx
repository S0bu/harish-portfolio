import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'NEON RUNNER',
    desc: 'A fast-paced endless runner game with retro neon aesthetics and procedural generation.',
    tags: ['Unity', 'C#', 'Game Design'],
    colorHex: '#80cbc4',
    type: 'GAME'
  },
  {
    title: 'PIXEL CHAT',
    desc: 'Real-time messaging app with pixel art avatars and retro UI. Built for the nostalgic.',
    tags: ['React', 'Firebase', 'Node.js'],
    colorHex: '#4fc3f7',
    type: 'WEB APP'
  },
  {
    title: 'DROID BEATS',
    desc: 'Android music player with visualizer, gesture controls, and AI-powered playlists.',
    tags: ['Kotlin', 'Jetpack Compose', 'ML Kit'],
    colorHex: '#ce93d8',
    type: 'ANDROID'
  },
  {
    title: 'SPACE TRADER',
    desc: 'Intergalactic trading simulator. Buy low, sell high, dodge pirates. Classic gameplay.',
    tags: ['Godot', 'GDScript', 'Pixel Art'],
    colorHex: '#ffd54f',
    type: 'GAME'
  },
  {
    title: 'RETRO FOLIO',
    desc: 'This very portfolio you are looking at. Meta, right? Built with React + Three.js.',
    tags: ['React', 'Three.js', 'Framer Motion'],
    colorHex: '#ff8a65',
    type: 'WEB'
  },
  {
    title: 'FIT QUEST',
    desc: 'Gamified fitness tracker for Android. Earn XP, level up, defeat the couch boss.',
    tags: ['Kotlin', 'Room DB', 'Material 3'],
    colorHex: '#9575cd',
    type: 'ANDROID'
  }
]

const typeIcons = {
  GAME: '[G]',
  'WEB APP': '[W]',
  WEB: '[W]',
  ANDROID: '[A]'
}

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
          fontSize: 'clamp(40px, 6vw, 65px)',
          color: 'var(--accent-green)',
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
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: 'spring', bounce: 0.3 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.04,
              y: -10,
              boxShadow: `0 0 30px ${p.colorHex}40`
            }}
            style={{
              border: `1px solid ${p.colorHex}60`,
              borderRadius: '12px',
              padding: '25px',
              background: 'rgba(8,12,20,0.88)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s'
            }}
          >
            {/* Type badge */}
            <div style={{
              position: 'absolute',
              top: '12px', right: '12px',
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '7px',
              padding: '4px 8px',
              background: p.colorHex,
              color: '#000',
              borderRadius: '3px'
            }}>
              {p.type}
            </div>

            {/* Type icon */}
            <div style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '28px',
              color: p.colorHex,
              opacity: 0.5,
              marginBottom: '14px',
              fontWeight: 700
            }}>
              {typeIcons[p.type]}
            </div>

            <h3 style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '13px',
              color: p.colorHex,
              textShadow: `0 0 8px ${p.colorHex}`,
              marginBottom: '10px'
            }}>
              {p.title}
            </h3>

            <p style={{
              fontFamily: "'VT323', monospace",
              fontSize: '18px',
              color: '#bbb',
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
                  border: `1px solid ${p.colorHex}40`,
                  borderRadius: '10px',
                  color: p.colorHex,
                  background: `${p.colorHex}10`
                }}>
                  #{tag}
                </span>
              ))}
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${p.colorHex}, transparent)`,
                transformOrigin: 'left'
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
