import axios from 'axios'

const api = axios.create({
  baseURL: ' https://apitaketest.herokuapp.com'
}) 

export default api