import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Websites Built', value: '5+' },
  { label: 'Games Created', value: '10+' },
  { label: 'Android Apps', value: '2+' },
  { label: 'Coffee Consumed', value: 'Inf' },
]

export default function About() {
  return (
    <section id="about" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 20px'
    }}>
      <div style={{ maxWidth: '1000px', width: '100%' }}>
        <motion.h2
          className="neon-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring' }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Bangers', cursive",
            fontSize: 'clamp(36px, 6vw, 65px)',
            color: 'var(--accent-primary)',
            textAlign: 'center',
            marginBottom: '50px',
            letterSpacing: '5px'
          }}
        >
          WHO IS THIS GUY?
        </motion.h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
          {/* Character card */}
          <motion.div
            className="neon-box"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring' }}
            viewport={{ once: true }}
            style={{ flex: '1 1 300px', maxWidth: '400px' }}
          >
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{
                width: '80px', height: '80px',
                margin: '0 auto 16px',
                border: '2px solid var(--accent-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px var(--accent-primary)',
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '22px',
                color: 'var(--accent-primary)',
                fontWeight: 700
              }}>
                HK
              </div>
              <h3 style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '13px',
                color: 'var(--accent-amber)',
                textShadow: '0 0 8px var(--accent-amber)'
              }}>
                HARISH KUMAR
              </h3>
              <p style={{
                fontFamily: "'VT323', monospace",
                fontSize: '18px',
                color: 'var(--accent-secondary)',
                marginTop: '6px'
              }}>
                aka "The Digital Craftsman"
              </p>
            </div>

            <div style={{
              fontFamily: "'VT323', monospace",
              fontSize: '19px',
              lineHeight: 1.8,
              color: '#ccc'
            }}>
              <p style={{ color: 'var(--accent-green)' }}>{'// Character Bio'}</p>
              <p>
                A passionate creator who turns caffeine into code.
                I build <span style={{ color: 'var(--accent-primary)' }}>websites</span> that pop,
                <span style={{ color: 'var(--accent-secondary)' }}> games</span> that hook, and
                <span style={{ color: 'var(--accent-green)' }}> Android apps</span> that rock.
              </p>
              <p style={{ marginTop: '10px' }}>
                When not coding, I am probably thinking about coding. Or eating. Mostly coding though.
              </p>
              <p style={{ marginTop: '10px', color: 'var(--accent-amber)' }}>
                {'> STATUS: Always shipping projects'}
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <div style={{
            flex: '1 1 300px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            maxWidth: '400px'
          }}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="neon-box-pink"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.15, type: 'spring' }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, x: 8 }}
                style={{ display: 'flex', alignItems: 'center', gap: '15px' }}
              >
                <div>
                  <p style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '26px',
                    color: 'var(--accent-primary)',
                    fontWeight: 'bold',
                    textShadow: '0 0 8px var(--accent-primary)'
                  }}>
                    {stat.value}
                  </p>
                  <p style={{
                    fontFamily: "'VT323', monospace",
                    fontSize: '18px',
                    color: '#aaa'
                  }}>
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="neon-box"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              style={{ marginTop: '10px' }}
            >
              <p style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '10px',
                color: 'var(--accent-amber)',
                marginBottom: '15px'
              }}>
                CHARACTER STATS
              </p>
              {[
                { name: 'CODING', val: 95, color: 'var(--accent-green)' },
                { name: 'CREATIVITY', val: 90, color: 'var(--accent-secondary)' },
                { name: 'DEBUGGING', val: 85, color: 'var(--accent-primary)' },
                { name: 'COFFEE INTAKE', val: 100, color: 'var(--accent-amber)' },
              ].map((s, i) => (
                <div key={s.name} style={{ marginBottom: '10px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: "'VT323', monospace",
                    fontSize: '16px',
                    color: s.color,
                    marginBottom: '3px'
                  }}>
                    <span>{s.name}</span>
                    <span>{s.val}/100</span>
                  </div>
                  <div style={{
                    height: '7px',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.val}%` }}
                      transition={{ duration: 1.5, delay: i * 0.2 }}
                      viewport={{ once: true }}
                      style={{
                        height: '100%',
                        background: s.color,
                        borderRadius: '4px',
                        boxShadow: `0 0 8px ${s.color}`
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
