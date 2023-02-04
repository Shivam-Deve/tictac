import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api-tic-tac.vercel.app/'
})

export default instance
