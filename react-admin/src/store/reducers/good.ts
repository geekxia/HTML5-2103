import {
  GET_GOOD_LIST,
  UPDATE_GOOD,
  GET_GOOD_INFO,
  CLEAN_GOOD_CACHE
} from '../actionTypes'

interface GoodState {
  total: number,
  list: Array<object>,
  cates: Array<object>,
  count: Number,
  info: Object
}

const initState: GoodState = {
  total: 0,
  list: [],
  cates: [],
  count: 0,     // 只是用于走流程（表示商品新增或编辑成功）
  info: {}
}

export default function reducer(state=initState, {type, payload}) {
  let newState = JSON.parse(JSON.stringify(state))
  switch (type) {
    case GET_GOOD_LIST:
      newState.total = payload.total
      newState.list = payload.list
      break
    case UPDATE_GOOD:
      newState.count++
      break
    case GET_GOOD_INFO:
      newState.info = payload
      break
    case CLEAN_GOOD_CACHE:
      newState.count = 0
      newState.info = {}
      break
    default:
      break
  }
  return newState
}
