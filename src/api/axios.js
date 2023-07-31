import axios from 'axios'

const baseUrl = 'http://www.omdbapi.com/'
const apiKey = '6dfeb974'

const api = axios.create({
  baseURL: baseUrl,
})

api.interceptors.request.use((request) => {
  request.params = { ...request.params, apikey: apiKey, plot: 'full' }
  return request;
})

export default api
