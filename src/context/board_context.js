import React, { useContext, createContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { io } from 'socket.io-client'
import axios from '../axios'
import { useUserContext } from './user_context'

const BoardContext = createContext()

export const BoardProvider = ({ children }) => {
  const { user } = useUserContext()
  const [socket, setSocket] = useState(null)
  const [room, setRoom] = useState()
  const [status, setStatus] = useState("It's your move");
  const [allowed, setAllowed] = useState(true);
  const [matrix, setState] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ])


  const win = (player, r, c) => {
    // check row
    const rowSum = matrix[r].reduce((sum,curr) => {
      return sum+curr
    }, 0)
    if(rowSum===3 || rowSum===-3) return player

    // check col

    const colSum = matrix[0][c] + matrix[1][c] + matrix[2][c];
    if(colSum===3 || colSum===-3) return player

    // check dia
    if (r == c) {
      const dia = matrix[0][0] + matrix[1][1] + matrix[2][2];
      if(dia===3 || dia===-3) return player
    }

    // check adia
    if (r + c === 2) {
      const adia = matrix[2][0] + matrix[1][1] + matrix[0][2];
      if(adia===3 || adia===-3) return player
    }
  }

  const connect = () => {
    setSocket(io('https://api-tic-tac.vercel.app/'))
  }

  const startGame = async emailId => {
    try {
      const res = await axios.post('/start_game', {
        p1: user.email,
        p2: emailId
      })
      if (res) {
        socket?.emit('join', res.data._id, () => {
          setRoom(user.email)
        })
      }
    } catch (error) {
      console.log('Error', error)
    }
  }

  const play = async gameId => {
    socket?.emit('join', gameId, () => {
      setRoom(gameId)
    })
  }

  useEffect(() => {
    connect()
  }, [])


  socket?.on('update_board', (row, col) => {
    makeMove(-1, row, col)
  })

  socket?.on('result', (message) => {
    console.log("Message", message)
  })

  const makeMove = (player, row, col) => {
    const newState = [...matrix]
    if ((newState[row][col] === null || newState[row][col] === 'null') && allowed) {
      if (player === -1) {
        newState[row][col] = -1
        setAllowed(true)
        setStatus("It's your move")
      } else if (player === 1) {
        newState[row][col] = 1
        socket.emit('move_made', room, row, col)
        setAllowed(false)
        setStatus("Wait for opponent's move")
      }

      const who = win(player, row, col);
      if (who === 1) {
        socket.emit("finshed", "loose", room)
        setStatus("You win")
      } else if(who===-1){
        setStatus("You loose")
      }
    }

    setState(newState)
  }

  return (
    <BoardContext.Provider value={{ matrix, makeMove, startGame, play,status }}>
      {children}
    </BoardContext.Provider>
  )
}

// make sure use
export const useBoardContext = () => {
  return useContext(BoardContext)
}
