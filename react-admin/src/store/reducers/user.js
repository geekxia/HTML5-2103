import {
  LOGIN_OK,
  GET_USER_INFO
} from '../actionTypes'

const initState = {
  token: localStorage.getItem('token'),
  // 用于控制“菜单权限”“Route权限”
  userinfo: {}
}

export default function reducer(state=initState, action) {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case LOGIN_OK:
      newState.token = localStorage.getItem('token')
      break
    case GET_USER_INFO:
      newState.userinfo = action.payload
      break
    default:
  }
  return newState
}
