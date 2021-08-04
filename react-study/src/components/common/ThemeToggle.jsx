import React from 'react'

export default props => {
  let { theme, onChange } = props
  // return jsx
  function changeTheme(e, k) {
    console.log('e', e.target.value)
    // 手动取值，然后把最新的theme传递给父组件
    // this.setState(s=>({theme: {...s.theme, [k]:e.target.value}}))
    onChange&&onChange({...theme, [k]:e.target.value})
  }
  return (
    <div>
      <span>前景色：</span>
      <input
        type="color"
        value={theme.color||'#ffffff'}
        onChange={_=>changeTheme(_, "color")}
      />
      <span>背景色：</span>
      <input
        type="color"
        value={theme.background||'#000000'}
        onChange={_=>changeTheme(_, "background")}
      />
    </div>
  )
}
