import React from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'WEB DEV',
    color: '#00ffff',
    skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Node.js', 'Three.js']
  },
  {
    title: 'GAME DEV',
    color: '#39ff14',
    skills: ['Unity', 'C#', 'Godot', 'Phaser', 'Game Design', 'Pixel Art', '3D Modeling']
  },
  {
    title: 'ANDROID',
    color: '#ff00ff',
    skills: ['Kotlin', 'Java', 'Jetpack Compose', 'Firebase', 'Room DB', 'Material Design']
  },
  {
    title: 'TOOLS',
    color: '#ffff00',
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
          fontSize: 'clamp(40px, 6vw, 70px)',
          color: '#ff00ff',
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
            initial={{ y: 100, opacity: 0, rotateX: 45 }}
            whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{ delay: ci * 0.15, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 40px ${cat.color}`,
              y: -10
            }}
            style={{
              border: `2px solid ${cat.color}`,
              borderRadius: '15px',
              padding: '25px',
              background: 'rgba(0,0,0,0.8)',
              boxShadow: `0 0 15px ${cat.color}40`,
              transition: 'all 0.3s'
            }}
          >
            <motion.h3
              animate={{ textShadow: [`0 0 10px ${cat.color}`, `0 0 25px ${cat.color}`, `0 0 10px ${cat.color}`] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '14px',
                color: cat.color,
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
                    scale: 1.2,
                    background: cat.color,
                    color: '#000',
                    rotate: [0, -5, 5, 0]
                  }}
                  style={{
                    fontFamily: "'VT323', monospace",
                    fontSize: '16px',
                    padding: '6px 14px',
                    border: `1px solid ${cat.color}50`,
                    borderRadius: '20px',
                    color: cat.color,
                    background: `${cat.color}15`,
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
