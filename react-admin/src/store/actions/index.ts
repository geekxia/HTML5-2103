import {
  LOGIN_OK,
  GET_USER_INFO,
  GET_GOOD_LIST,
  UPDATE_GOOD,
  GET_GOOD_INFO,
  CLEAN_GOOD_CACHE
} from '../actionTypes'

import { fetchLogin, fetchUserInfo, fetchGoodList, fetchGoodUpdate, fetchGoodInfo } from '@/api'

// 在redux中，默认不支持异步的action
// plain object = { type, payload }
export function login(payload, callback) {
  return dispatch => {
    fetchLogin(payload).then(res=>{
      console.log('token', res)
      localStorage.setItem('token', res.token)
      dispatch({
        type: LOGIN_OK,
        payload: res.token
      })
      // 跳转进入系统内部
      callback && callback()
    })
  }
}

// 获取用户信息
export function getinfo() {
  return dispatch => {
    fetchUserInfo().then(res=>{
      console.log('userinfo', res)
      // 把用户信息放到redux中
      dispatch({
        type: GET_USER_INFO,
        payload: res.userInfo
      })
    })
  }
}

// 获取商品列表
export function getGoodList(payload) {
  return dispatch => {
    fetchGoodList(payload).then(res=>{
      dispatch({
        type: GET_GOOD_LIST,
        payload: res
      })
    })
  }
}

export function getGoodUpdate(payload) {
  return dispatch => {
    fetchGoodUpdate(payload).then(res=>{
      dispatch({
        type: UPDATE_GOOD,
        payload: ''
      })
    })
  }
}

export function getGoodInfo(payload) {
  return dispatch => {
    fetchGoodInfo(payload).then(res=>{
      dispatch({
        type: GET_GOOD_INFO,
        payload: res.info
      })
    })
  }
}

export function cleanCache() {
  return {
    type: CLEAN_GOOD_CACHE,
    payload: ''
  }
}
