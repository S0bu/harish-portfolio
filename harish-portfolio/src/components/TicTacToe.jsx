import React, { useState } from 'react'
import { motion } from 'framer-motion'

const winLines = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
]

function getWinner(board) {
  for (const [a,b,c] of winLines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a]
  }
  return null
}

function minimax(board, isMax) {
  const winner = getWinner(board)
  if (winner === 'O') return 10
  if (winner === 'X') return -10
  if (board.every(c => c)) return 0

  if (isMax) {
    let best = -Infinity
    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        board[i] = 'O'
        best = Math.max(best, minimax(board, false))
        board[i] = null
      }
    }
    return best
  } else {
    let best = Infinity
    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        board[i] = 'X'
        best = Math.min(best, minimax(board, true))
        board[i] = null
      }
    }
    return best
  }
}

function aiMove(board) {
  let bestScore = -Infinity
  let move = -1
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      board[i] = 'O'
      const score = minimax(board, false)
      board[i] = null
      if (score > bestScore) {
        bestScore = score
        move = i
      }
    }
  }
  return move
}

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [gameOver, setGameOver] = useState(false)
  const [message, setMessage] = useState('YOUR TURN (X)')
  const winner = getWinner(board)

  const handleClick = (i) => {
    if (board[i] || gameOver || winner) return
    const newBoard = [...board]
    newBoard[i] = 'X'

    const w = getWinner(newBoard)
    if (w) {
      setBoard(newBoard)
      setMessage('🎉 YOU WIN! IMPOSSIBLE!')
      setGameOver(true)
      return
    }
    if (newBoard.every(c => c)) {
      setBoard(newBoard)
      setMessage("🤝 IT'S A DRAW!")
      setGameOver(true)
      return
    }

    const ai = aiMove(newBoard)
    if (ai !== -1) newBoard[ai] = 'O'

    const w2 = getWinner(newBoard)
    if (w2) {
      setBoard(newBoard)
      setMessage('🤖 AI WINS! TRY AGAIN!')
      setGameOver(true)
      return
    }
    if (newBoard.every(c => c)) {
      setBoard(newBoard)
      setMessage("🤝 IT'S A DRAW!")
      setGameOver(true)
      return
    }

    setBoard(newBoard)
    setMessage('YOUR TURN (X)')
  }

  const reset = () => {
    setBoard(Array(9).fill(null))
    setGameOver(false)
    setMessage('YOUR TURN (X)')
  }

  return (
    <motion.div
      className="neon-box"
      initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ type: 'spring', bounce: 0.4 }}
      viewport={{ once: true }}
      style={{ textAlign: 'center', width: '320px' }}
    >
      <h3 style={{
        fontFamily: "'Press Start 2P', cursive",
        fontSize: '14px',
        color: '#00ffff',
        textShadow: '0 0 10px #00ffff',
        marginBottom: '15px'
      }}>
        🎮 TIC TAC TOE
      </h3>
      <p style={{
        fontFamily: "'VT323', monospace",
        fontSize: '18px',
        color: '#ffff00',
        marginBottom: '15px',
        textShadow: '0 0 5px #ffff00'
      }}>
        {message}
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 80px)',
        gap: '5px',
        justifyContent: 'center',
        marginBottom: '15px'
      }}>
        {board.map((cell, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: cell ? 1 : 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleClick(i)}
            style={{
              width: '80px',
              height: '80px',
              background: 'rgba(0,0,0,0.8)',
              border: '2px solid #333',
              borderRadius: '8px',
              fontSize: '36px',
              fontFamily: "'Bangers', cursive",
              cursor: cell || gameOver ? 'default' : 'pointer',
              color: cell === 'X' ? '#00ffff' : '#ff00ff',
              textShadow: cell === 'X' ? '0 0 15px #00ffff' : '0 0 15px #ff00ff',
              boxShadow: cell ? `inset 0 0 15px ${cell === 'X' ? '#00ffff20' : '#ff00ff20'}` : 'none'
            }}
          >
            {cell && (
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', bounce: 0.6 }}
              >
                {cell}
              </motion.span>
            )}
          </motion.button>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={reset}
        style={{
          fontFamily: "'Press Start 2P', cursive",
          fontSize: '10px',
          padding: '10px 20px',
          background: 'transparent',
          border: '2px solid #39ff14',
          color: '#39ff14',
          cursor: 'pointer',
          borderRadius: '5px',
          textShadow: '0 0 5px #39ff14',
          boxShadow: '0 0 10px #39ff1440'
        }}
      >
        RESTART
      </motion.button>
    </motion.div>
  )
}
