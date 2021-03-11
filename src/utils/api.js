import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/'

const instance = axios.create({
  baseURL,
  timeout: 20000,
  withCredentials: true,
})

export const resourceURL = ' https://jsonplaceholder.typicode.com/'

export default instance