
function test(target) {
  return target
}

@test
class Dog {
  run() {
    console.log('dog run') // eslint-disable-line
  }
}

// 这是ES6的模块化语法，在最新的谷歌浏览器是支持的，但是低版本的浏览器可能会报错
export default Dog
