import axios from '@/utils/axios'

export function fetchCnodeList(params) {
  return axios({
    url: '/api/v1/topics',
    method: 'get',
    params
  })
}
