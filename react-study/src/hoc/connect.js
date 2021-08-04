import React from 'react'

export default function connect(fn1, fn2) {
  // do something
  var obj1 = fn1()
  var obj2 = fn2()
  return function test(WrappedComponent) {
    return props => (
      <WrappedComponent {...props} {...obj1} {...obj2} />
    )
  }
}
