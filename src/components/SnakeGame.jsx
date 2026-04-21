import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

const GRID = 20
const CELL = 15
const SIZE = GRID * CELL

const DIR = { ArrowUp: [0,-1], ArrowDown: [0,1], ArrowLeft: [-1,0], ArrowRight: [1,0] }

export default function SnakeGame() {
  const canvasRef = useRef(null)
  const [snake, setSnake] = useState([[5,5],[4,5],[3,5]])
  const [food, setFood] = useState([10,10])
  const [dir, setDir] = useState([1,0])
  const [running, setRunning] = useState(false)
  const [score, setScore] = useState(0)
  const [dead, setDead] = useState(false)
  const dirRef = useRef(dir)
  const snakeRef = useRef(snake)
  const foodRef = useRef(food)

  dirRef.current = dir
  snakeRef.current = snake
  foodRef.current = food

  const spawnFood = useCallback(() => {
    let pos
    do {
      pos = [Math.floor(Math.random()*GRID), Math.floor(Math.random()*GRID)]
    } while (snakeRef.current.some(s => s[0]===pos[0] && s[1]===pos[1]))
    return pos
  }, [])

  const reset = () => {
    setSnake([[5,5],[4,5],[3,5]])
    setFood([10,10])
    setDir([1,0])
    setScore(0)
    setDead(false)
    setRunning(false)
  }

  useEffect(() => {
    const handler = (e) => {
      if (DIR[e.key]) {
        e.preventDefault()
        const [dx,dy] = DIR[e.key]
        if (dx !== -dirRef.current[0] || dy !== -dirRef.current[1]) {
          setDir([dx,dy])
        }
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    if (!running || dead) return
    const interval = setInterval(() => {
      const s = [...snakeRef.current]
      const head = [s[0][0]+dirRef.current[0], s[0][1]+dirRef.current[1]]

      if (head[0]<0||head[0]>=GRID||head[1]<0||head[1]>=GRID||s.some(p=>p[0]===head[0]&&p[1]===head[1])) {
        setDead(true)
        setRunning(false)
        return
      }

      s.unshift(head)
      if (head[0]===foodRef.current[0]&&head[1]===foodRef.current[1]) {
        setScore(sc => sc+10)
        setFood(spawnFood())
      } else {
        s.pop()
      }
      setSnake(s)
    }, 120)
    return () => clearInterval(interval)
  }, [running, dead, spawnFood])

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    ctx.fillStyle = '#0a0a0a'
    ctx.fillRect(0,0,SIZE,SIZE)

    // Grid lines
    ctx.strokeStyle = '#111'
    for (let i=0;i<=GRID;i++) {
      ctx.beginPath()
      ctx.moveTo(i*CELL,0)
      ctx.lineTo(i*CELL,SIZE)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(0,i*CELL)
      ctx.lineTo(SIZE,i*CELL)
      ctx.stroke()
    }

    // Food
    ctx.fillStyle = '#ff00ff'
    ctx.shadowColor = '#ff00ff'
    ctx.shadowBlur = 10
    ctx.fillRect(food[0]*CELL+2,food[1]*CELL+2,CELL-4,CELL-4)

    // Snake
    snake.forEach((s,i) => {
      ctx.fillStyle = i===0 ? '#00ffff' : '#39ff14'
      ctx.shadowColor = i===0 ? '#00ffff' : '#39ff14'
      ctx.shadowBlur = 8
      ctx.fillRect(s[0]*CELL+1,s[1]*CELL+1,CELL-2,CELL-2)
    })
    ctx.shadowBlur = 0
  }, [snake, food])

  return (
    <motion.div
      className="neon-box-pink"
      initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ type: 'spring', bounce: 0.4 }}
      viewport={{ once: true }}
      style={{ textAlign: 'center', width: '340px' }}
    >
      <h3 style={{
        fontFamily: "'Press Start 2P', cursive",
        fontSize: '14px',
        color: '#ff00ff',
        textShadow: '0 0 10px #ff00ff',
        marginBottom: '10px'
      }}>
        🐍 SNAKE
      </h3>
      <p style={{
        fontFamily: "'VT323', monospace",
        fontSize: '20px',
        color: '#39ff14',
        marginBottom: '10px'
      }}>
        SCORE: {score} {dead && '💀 GAME OVER'}
      </p>

      <canvas
        ref={canvasRef}
        width={SIZE}
        height={SIZE}
        style={{
          border: '2px solid #333',
          borderRadius: '5px',
          display: 'block',
          margin: '0 auto 15px'
        }}
      />

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => { if (dead) reset(); setRunning(!running) }}
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '10px',
            padding: '10px 15px',
            background: 'transparent',
            border: '2px solid #00ffff',
            color: '#00ffff',
            cursor: 'pointer',
            borderRadius: '5px',
            textShadow: '0 0 5px #00ffff'
          }}
        >
          {dead ? 'RETRY' : running ? 'PAUSE' : 'START'}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={reset}
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '10px',
            padding: '10px 15px',
            background: 'transparent',
            border: '2px solid #ffff00',
            color: '#ffff00',
            cursor: 'pointer',
            borderRadius: '5px',
            textShadow: '0 0 5px #ffff00'
          }}
        >
          RESET
        </motion.button>
      </div>

      {/* Mobile controls */}
      <div style={{ marginTop: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <DPadBtn label="▲" onClick={() => setDir([0,-1])} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
          <DPadBtn label="◄" onClick={() => setDir([-1,0])} />
          <DPadBtn label="►" onClick={() => setDir([1,0])} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <DPadBtn label="▼" onClick={() => setDir([0,1])} />
        </div>
      </div>
    </motion.div>
  )
}

function DPadBtn({ label, onClick }) {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      onClick={onClick}
      style={{
        width: '40px',
        height: '40px',
        background: 'rgba(255,0,255,0.2)',
        border: '1px solid #ff00ff',
        color: '#ff00ff',
        fontSize: '18px',
        cursor: 'pointer',
        borderRadius: '5px'
      }}
    >
      {label}
    </motion.button>
  )
}
