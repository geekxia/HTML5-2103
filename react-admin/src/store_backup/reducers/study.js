import {
  COUNT_ADD,
  COUNT_SUB
} from '../actionTypes'

const initState = {
  count: 1,
  list: []
}



export default (state=initState, action) => {
  console.log('-----有信号来了', action)
  // do something
  let newState = JSON.parse(JSON.stringify(state))

  // let newState = {...state}
  // let newState = Object.assign(state, {})

  switch (action.type) {
    case COUNT_ADD:
      newState.count += action.payload
      break
    case COUNT_SUB:
      newState.count -= action.payload
      break;
    case 'GET_CNODE_LIST':
      newState.list = action.payload
      break;
    default:

  }
  return newState
}
