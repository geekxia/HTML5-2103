// 功能：把ThemeContext上下文这个换肤功能变成高阶组件，功能复用

import React from 'react'
import ThemeContext from '@/utils/theme'
const { Consumer } = ThemeContext

export default function admin(WrappedComponent) {
  return props => (
    <Consumer>
    {
      theme => (
        <div
          style={{
            background: theme.background,
            color: theme.color
          }}
        >
          <WrappedComponent {...props} />
        </div>
      )
    }
    </Consumer>
  )
}
