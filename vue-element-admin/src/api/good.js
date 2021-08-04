import request from '@/utils/request'

// 描述：获取商品列表
// 说明：在真实工作中，管理系统中的商品列表接口和webapp中的商品列表接口，肯定不是同一个。
export function fetchGoodList(params) {
  return request({
    url: '/api/v1/good/list',
    method: 'get',
    params
  })
}

// 描述：获取商品品类
export function fetchCates(params) {
  return request({
    url: '/api/v1/good/cates',
    method: 'get',
    params
  })
}

// 描述：商品新增
export function fetchGoodUpdate(data) {
  return request({
    url: '/api/v1/good/add',
    method: 'post',
    data
  })
}

// 以对象的方式抛出去
export default {
  fetchGoodList,
  fetchCates,
  fetchGoodUpdate
}
