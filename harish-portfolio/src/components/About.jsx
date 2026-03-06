import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { emoji: '🌐', label: 'Websites Built', value: '5+' },
  { emoji: '🎮', label: 'Games Created', value: '10+' },
  { emoji: '📱', label: 'Android Apps', value: '2+' },
  { emoji: '☕', label: 'Coffee Consumed', value: '∞' },
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
          WHO IS THIS GUY?

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
          {/* Character card */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                👨‍💻
              <h3 style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '16px',
                color: '#ffff00',
                textShadow: '0 0 10px #ffff00'
              }}>
                HARISH KUMAR
              </h3>
              <p style={{
                fontFamily: "'VT323', monospace",
                fontSize: '20px',
                color: '#ff00ff',
                marginTop: '5px'
              }}>
                aka "The Digital Craftsman"
              </p>
            </div>

            <div style={{
              fontFamily: "'VT323', monospace",
              fontSize: '20px',
              lineHeight: 1.8,
              color: '#ccc'
            }}>
              <p style={{ color: '#39ff14' }}>{'// Character Bio'}</p>
              <p>
                A passionate creator who turns caffeine into code.
                I build <span style={{ color: '#00ffff' }}>websites</span> that pop,
                <span style={{ color: '#ff00ff' }}> games</span> that hook, and
                <span style={{ color: '#39ff14' }}> Android apps</span> that rock.
              </p>
              <p style={{ marginTop: '10px' }}>
                When I'm not coding, I'm probably thinking about coding.
                Or eating. Mostly coding though.
              </p>
              <p style={{ marginTop: '10px', color: '#ffff00' }}>
                {'> STATUS: Always shipping projects'}
              </p>
            </div>

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
                whileHover={{ scale: 1.05, x: 10 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
                <div>
                  <p style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '28px',
                    color: '#00ffff',
                    fontWeight: 'bold',
                    textShadow: '0 0 10px #00ffff'
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

            {/* Fun RPG stats */}
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
                color: '#ffff00',
                marginBottom: '15px'
              }}>
                CHARACTER STATS
              </p>
              {[
                { name: 'CODING', val: 95, color: '#39ff14' },
                { name: 'CREATIVITY', val: 90, color: '#ff00ff' },
                { name: 'DEBUGGING', val: 85, color: '#00ffff' },
                { name: 'COFFEE INTAKE', val: 100, color: '#ffff00' },
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
                    height: '8px',
                    background: 'rgba(255,255,255,0.1)',
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
                        boxShadow: `0 0 10px ${s.color}`
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
