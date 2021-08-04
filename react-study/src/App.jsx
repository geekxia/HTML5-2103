import React from 'react'
import { Layout, ThemeToggle } from '@/components'
import {
  HashRouter,
  // BrowserRouter
} from 'react-router-dom'

import ThemeContext from '@/utils/theme'
import { Provider } from 'mobx-react'
import store from '@/store'




// 函数式组件（没有生命周期等特性）
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: {
        background: '#000000',
        color: '#ffffff'
      }
    }
  }

  render() {
    let { theme } = this.state
    return (
      <HashRouter>
        <Provider store={store}>
          <ThemeContext.Provider value={theme}>
            <Layout />
          </ThemeContext.Provider>
        </Provider>
      </HashRouter>
    )
  }
}
// <ThemeToggle theme={theme} onChange={theme=>this.setState({theme})} />
