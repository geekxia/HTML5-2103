import axios from '@/utils/axios'

export function fetchCnode(params) {
  return axios({
    url: '/api/v1/topics',
    method: 'get',
    params
  })
}

export function fetchLogin(data) {
  return axios({
    url: '/api/v2/user/login',
    method: 'post',
    data
  })
}

export function fetchUserInfo(params) {
  return axios({
    url: '/api/v2/user/getUserInfo',
    method: 'get',
    params
  })
}

export function fetchGoodList(params) {
  return axios({
    url: '/api/v2/good/list',
    method: 'get',
    params
  })
}

export function fetchGoodUpdate(data) {
  return axios({
    url: '/api/v2/good/update',
    method: 'post',
    data
  })
}

export function fetchGoodInfo(params) {
  return axios({
    url: '/api/v2/good/info',
    method: 'get',
    params
  })
}
