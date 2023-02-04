import React, { useContext, createContext, useState } from 'react'
import axios from '../axios'
const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [games, setGames] = useState(null)

  const getGames = async () => {
    try {
      const res = await axios.post('/get_games', { email: user.email })
      if (res) {
        setGames(res.data)
      }
    } catch (error) {
      console.log('Error', error)
    }
  }

  const login = async userData => {
    try {
      const res = await axios.post('/login', userData)
      if (res) {
        setUser(res.data)
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
  const register = async userData => {
    try {
      const res = await axios.post('/register', userData)
      if (res) {
        setUser(res.data)
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
  return (
    <UserContext.Provider value={{ user, login, register, getGames, games }}>
      {children}
    </UserContext.Provider>
  )
}

// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
