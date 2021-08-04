var baseUrl = 'https://cnodejs.org/api/v1'

// 封装调接口的工具方法
function fetch(url, method, data) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: baseUrl+url,
			method,
			data,
			// 只是表示HTTP的状态码：200
			success(res) {
				if(res.success) {
					resolve(res.data)  // .then()
				}
			},
			fail(err) {
				reject(err)   // .catch()
			}
		})
	})
}

// 获取文章列表 { page, tab, limit, mdrender }
function fetchCnodeList(data) {
	return fetch('/topics', 'GET', data)
}
