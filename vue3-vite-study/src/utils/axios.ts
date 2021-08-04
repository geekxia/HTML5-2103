import axios from 'axios'

const baseURL = 'https://cnodejs.org/api/v1'

// 测试vite的proxy代理
// const baseURL = 'http://localhost:8888/api/v1'

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {}
})

instance.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default instance
