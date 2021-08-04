import axios from './axios'

const fetchTopics = params=>axios({url:'/topics',method:'GET', params})

export default {
	fetchTopics
}
