
import {
  makeAutoObservable,
} from 'mobx'

import { fetchCnodeList } from '@/api'

export default class CnodeStore {
  constructor() {
    makeAutoObservable(this)
  }
  list = []
  // action
  getList(payload) {
    // this.list = payload
    fetchCnodeList(payload).then(list=>{
      console.log('cnode', list)
      this.list = list
    })
  }
}
