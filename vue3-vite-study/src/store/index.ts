import { createStore } from "vuex"

import test from './modules/test'
import cnode from './modules/cnode'

export default createStore({
	modules: {
    test,
		cnode
  }
})
