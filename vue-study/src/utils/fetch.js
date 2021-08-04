import axios from 'axios'

// const baseURL = 'https://cnodejs.org'

// const baseURL = 'https://c.y.qq.com'
const baseURL = 'http://localhost:9090'

const fetch = axios.create({
  baseURL,
  timeout: 5000, // 5秒，否则是超时
  headers: {}
})

// 请求拦截器（指HTTP请求发送出去之前）
fetch.interceptors.request.use(config=>{
  console.log('请求拦截器', config)
  // 一般在这里为HTTP添加各种headers参数，比如token（是一种流行的鉴权方案）
  // 在请求拦截器，一般都添加某些信息
  return config
}, error => Promise.reject(error))

// 响应拦截器（指HTTP响应抵达客户端之前）
fetch.interceptors.response.use(response=>{
  let res = null
  // 一般在这里做status code处理、业务状态码的处理、业务数据的过滤
  console.log('响应拦截器', response)
  // 【第一层错误处理：是根据HTTP状态码进行判断】
  if (response.status===200) {
    // 【第二层错误处理：是根据后端业务状态码进行判断】
    // 同时兼容处理两台后端服务器 success=cnode服务、code=QQ音乐服务
    if(response.data && (response.data.success || response.data.code===0)) {
      // 【数据过滤】
      res = response.data.data
    }else{
      alert('入参有误')
    }
  } else {
    alert('网络异常，请稍后再试')
  }
  return res
}, error => Promise.reject(error))

export default fetch
