// 在这个子store中放置商品管理的vuex的逻辑

import { fetchCates } from '@/api/good'

const state = {
  cateList: []
}

const mutations = {
  UPDATE_CATE_LIST: (state, payload) => {
    state.cateList = payload
  }
}

const actions = {
  getCateList({commit}) {
    // 调取品类列表的接口
    fetchCates({}).then(res=>{
      console.log('品类列表', res)
      let { list } = res.data
      commit('UPDATE_CATE_LIST', list)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
