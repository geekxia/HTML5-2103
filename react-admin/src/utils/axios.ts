import axios from 'axios'

const baseURL = 'http://localhost:9090'

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {}
})

instance.interceptors.request.use(function (config) {
  // 加token
  config.headers.Authorization = localStorage.getItem('token')
  return config
}, function (error) {
  return Promise.reject(error)
})
instance.interceptors.response.use(function (response) {
  let res = null
  if(response && response.data && response.data.err===0) {
    res = response.data.data
  }
  // 数据过滤
  return res
}, function (error) {
  return Promise.reject(error);
})

export default instance
