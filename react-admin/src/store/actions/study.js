// action生成器

import { fetchCnode } from '../../api'

import {
  COUNT_ADD,
  COUNT_SUB,
  GET_CNODE_LIST
} from '../actionTypes'

export function addCount(payload) {
  return {
    type: COUNT_ADD,
    payload
  }
}

export function subCount(payload) {
  return {
    type: COUNT_SUB,
    payload
  }
}

// 功能：用于获取文章列表
export function getList(payload) {
  return function(dispatch) {
    fetchCnode(payload).then(res=>{
      dispatch({
        type: GET_CNODE_LIST,
        payload: res.data.data
      })
    })
  }
}

// export function getList(payload, dispatch) {
//   // 调接口
//   fetchCnode(payload).then(res=>{
//     // 调接口成功
//     dispatch({
//       type: 'GET_CNODE_LIST',
//       payload: res.data.data
//     })
//   })
//   return {type:'', payload: ''}
// }

// getList()
