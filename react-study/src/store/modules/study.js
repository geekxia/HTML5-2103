// study的子store
import {
  makeAutoObservable,
  // makeObservable,
  // observable,
  // action
} from 'mobx'

export default class StudyStore {
  constructor() {
    makeAutoObservable(this)
    // makeObservable({
    //   msg: observable,
    //   list: observable,
    //   changeList: action
    // })
  }
  msg = 'hello 2103'
  // action
  changeMsg(payload) {
    this.msg = payload
  }
}
