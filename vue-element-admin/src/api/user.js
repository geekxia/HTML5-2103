import request from '@/utils/request'

// 描述：用户登录
export function login(data) {
  return request({
    url: '/api/v1/admin/login',
    method: 'post',
    data
  })
}

// 描述：根据token获取用户信息
export function getInfo(token) {
  return request({
    url: '/api/v1/admin/userinfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
