import axios from 'axios'

const baseURL = 'http://localhost:3000'

const service = axios.create({
  baseURL,
  timeout: 5000
})
service.interceptors.response.use((res) => res.data)
// axios.defaults.baseURL = baseURL
export default service
