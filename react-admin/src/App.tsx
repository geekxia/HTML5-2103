import * as React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { HashRouter } from 'react-router-dom'

import Dashboard from '@/dashboard'

export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className='app'>
          <Dashboard />
        </div>
      </Provider>
    </HashRouter>
  )
}
