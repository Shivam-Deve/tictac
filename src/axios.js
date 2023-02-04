import axios from 'axios'
// https://api-tic-tac.vercel.app/
const instance = axios.create({
  baseURL: 'https://api-pwjdft6eo-shivam-deve.vercel.app/'
})

export default instance
