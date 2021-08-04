import axios from 'axios'
import { Toast } from 'vant'
import router from '../router'

const baseURL = 'http://localhost:8090'  // 你自己的vue服务地址
const version = '/api/v1'

const instance = axios.create({
  baseURL: baseURL + version,
  timeout: 5000,
  headers: {}
})

instance.interceptors.request.use(function (config) {
  // 通过headers请求头把token(登录凭证)带到后端
  config.headers.Authorization = localStorage.getItem('token')
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  let res = null
  // 数据过滤
  if(response.status===200) {
    if(response.data && response.data.err===0) {
      res = response.data.data
    }else if(response.data && response.data.err===-1) {
      // 当err=-1时，表示token无效或过期了，跳转到登录页重新登录
      router.push('/login')
    }else{
      // 当业务失败时，弹出交互提示框，把错误告诉用户
      Toast.fail(response.data.msg);
    }
  }
  return res
}, function (error) {
  return Promise.reject(error)
})

export default instance
