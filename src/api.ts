import axios from 'axios'

const api = axios.create({
  baseURL: ' https://git.heroku.com/apitaketest.git'
}) 

export default api