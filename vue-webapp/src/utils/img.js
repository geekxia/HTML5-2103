import iNotData from '@/assets/no-data.png'

// 如果部署测试环境，有些公司不考虑
const cdnBase = 'http://localhost:9999'

export default {
  imgBase: 'http://localhost:9999',  // 图片所在服务器的地址
  iNotData,
  u1: cdnBase+'/imgs/u1.png',
  u2: cdnBase+'/imgs/u2.png',
  u3: cdnBase+'/imgs/u2.png'
}
