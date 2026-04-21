import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'

export default function ParticlesBg() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        particles: {
          number: { value: 60 },
          color: { value: ['#ff00ff', '#00ffff', '#39ff14', '#ffff00'] },
          shape: { type: ['circle', 'triangle', 'star'] },
          opacity: { value: { min: 0.2, max: 0.6 } },
          size: { value: { min: 1, max: 4 } },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            outModes: 'bounce'
          },
          links: {
            enable: true,
            color: '#ff00ff',
            opacity: 0.15,
            distance: 150
          }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' }
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 }
          }
        }
      }}
    />
  )
}
