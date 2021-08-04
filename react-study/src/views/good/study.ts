
// cnpm i typescript -g
// cnpm i typescript -D
// cnpm i @babel/preset-typescript -D
// cnpm i ts-loader -D

// 简介：TypeScript是JavaScript的超集（ts代码可以兼容js代码）。
// TS是强类型语言，在浏览器环境、node环境中都不支持。
// 在项目中只要用到了TS，都在项目指定一个TS配置文件：tsconfig.json。

// TypeScript常用的数据类型：string、number、boolean、enum、tuple、Array<>、type[]、any、void
// TypeScript还支持自定义类型

let msg: number = 100
let str: string = 'hello world'
let bol: boolean = false

let list1: string[] = ['a', 'b', 'c']
let list2: Array<number> = [1, 3, 7, 9]
let list3: any[] = [1, false, {a:1}, [2,3]]
let list4: Array<any> = [true, 3, 'hello']

let list5: object[] = [{}, {}, {}]
let list6: Array<object> = [{}, {a:1}, {b:true}]

let list7: Array<number[]> = [[1,2,3],[4,5,6]]

// 元组
let tuple1: [number, boolean, string] = [100, true, 'hello']
let tuple2: [number[], string[], boolean[]] = [[1],['a'],[true]]

let aa: any = 'hello any'
aa = 100
aa = [1,2,3]

function add(a: number, b: string): void {
  console.log(a)
}
add(1, 'a')

function push(a: object[], b: Array<any>) {
  return [...a, ...b]
}
push([{a:1}], [1, true])


function cal(a: number[], ...rest: number[]): number {
  var arr = [...a, ...rest]
  var num = 0
  arr.map(ele=>num+=ele)
  return num
}
cal([], 1, 3, 4, 5, 9)
cal([1,2], 9)

// 自定义类型（type  interface）

type Good = {
  name: string,
  desc: string,
  src: string,
  hot: boolean,
  price?: number,
  list?: string[],   // ? 非必须
  cate: string,
  [propName: string]: any,   // 允许你添加任意的自定义属性
  shop?: object
}

// const g: Good = {
//   name: '小米手机',
//   desc: '好手机',
//   src: 'http://weioewo.png',
//   hot: true,
//   cate: 'office',
//   cate_zh: '办公用品'
//   // price: 200,
//   // list: ['M', 'S', 'XS']
// }

type StarProps = {
  value: number,
  onChanage: ()=>{}
}

// 类型联合
type A = string | number | boolean
let a: A = 'hello'
a = 2000
a = true


// 类型交叉
type T1 = {
  a: string
}
type T2 = {
  b: number,
  c?: boolean
}
type B = T1 & T2
const b: B = {
  a: '',
  b: 0,
  c: true
}


// 泛型
// function handle1(arg: number): number {
//   return arg
// }
// handle1(100)
// function handle2(arg: string): string {
//   return arg
// }
// handle2('hello')
// 
// function handle<T>(arg: T): T {
//   return arg
// }
// handle<number>(100)
// handle<string>('hello')
//
// function swap<T,U>(arg1: T, arg2: U): T {
//   return arg2
// }
// swap<string, string>('a', 'b')
// swap<number, string>(100, 'hello')

// interface X<T,U> {
//   a: T,
//   b: T,
//   c: U,
//   d?: Array<T>
// }
//
// const obj: X<string, boolean> = {
//   a: '',
//   b: '',
//   c: true,
//   d: ['a','b']
// }

// interface 自定义类型（接口、形状），这种方式定义的类型，可以被继承和实现
// type 自定义类型（类型），这种方式定义的类型，可以进行交叉、联合。

// 枚举
enum Cate {
  office = '办公用品',
  car = '汽车生活'
}

export {
  msg,
  Good
}
