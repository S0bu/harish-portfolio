import React from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'WEB DEV',
    color: 'var(--accent-primary)',
    colorHex: '#4fc3f7',
    skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Node.js', 'Three.js']
  },
  {
    title: 'GAME DEV',
    color: 'var(--accent-green)',
    colorHex: '#80cbc4',
    skills: ['Unity', 'C#', 'Godot', 'Phaser', 'Game Design', 'Pixel Art', '3D Modeling']
  },
  {
    title: 'ANDROID',
    color: 'var(--accent-secondary)',
    colorHex: '#ce93d8',
    skills: ['Kotlin', 'Java', 'Jetpack Compose', 'Firebase', 'Room DB', 'Material Design']
  },
  {
    title: 'TOOLS',
    color: 'var(--accent-amber)',
    colorHex: '#ffd54f',
    skills: ['Git', 'Docker', 'Figma', 'VS Code', 'Linux', 'AWS', 'MongoDB']
  }
]

export default function Skills() {
  return (
    <section id="skills" style={{
      minHeight: '100vh',
      padding: '80px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <motion.h2
        className="neon-text-pink"
        initial={{ scale: 0, rotate: -10 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', bounce: 0.5 }}
        viewport={{ once: true }}
        style={{
          fontFamily: "'Bangers', cursive",
          fontSize: 'clamp(40px, 6vw, 65px)',
          color: 'var(--accent-secondary)',
          textAlign: 'center',
          marginBottom: '50px',
          letterSpacing: '5px'
        }}
      >
        SKILL TREE
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        width: '100%'
      }}>
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: ci * 0.15, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.04,
              boxShadow: `0 0 30px ${cat.colorHex}40`,
              y: -8
            }}
            style={{
              border: `1px solid ${cat.colorHex}60`,
              borderRadius: '12px',
              padding: '25px',
              background: 'rgba(8,12,20,0.85)',
              boxShadow: `0 0 12px ${cat.colorHex}20`,
              transition: 'all 0.3s'
            }}
          >
            <motion.h3
              animate={{ textShadow: [`0 0 8px ${cat.colorHex}`, `0 0 20px ${cat.colorHex}`, `0 0 8px ${cat.colorHex}`] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '13px',
                color: cat.colorHex,
                marginBottom: '20px',
                textAlign: 'center'
              }}
            >
              {cat.title}
            </motion.h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
              {cat.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: ci * 0.1 + si * 0.05, type: 'spring' }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.15,
                    background: cat.colorHex,
                    color: '#000'
                  }}
                  style={{
                    fontFamily: "'VT323', monospace",
                    fontSize: '16px',
                    padding: '5px 13px',
                    border: `1px solid ${cat.colorHex}40`,
                    borderRadius: '20px',
                    color: cat.colorHex,
                    background: `${cat.colorHex}12`,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
