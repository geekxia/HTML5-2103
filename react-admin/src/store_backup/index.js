// redux  “三三三”

// 第一个“三”：createStore、combineReducers、applyMiddleware
// 第二个“三”：store、reducer、action
// 第三个“三”：store单一数据源、store只读的、只能通过reducer这种纯函数来修改store。

// mobx  mobx-react

// react-redux（<Provider>，connect(mapStateToProps, mapDispatchToProps)(Home), useSelector, useDispath）

import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'

// 本质：reducer是一个函数，是一个纯函数。
// 作用：用于修改store的。
// 语法：function reducer(state, action) { return '一个被修改过的新的state' }

import study from './reducers/study'

// 把多个小的switch语句，合并成一个大的switch语句
const rootReducer = combineReducers({
  study
})

// redux的store
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store

console.log('store', store.getState())
