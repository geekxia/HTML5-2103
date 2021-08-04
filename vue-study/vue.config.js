// 这是vue脚手架环境唯一的配置文件
// 事实上：这个文件是基于webpack的二次封装，封装的目的是让你更容易地使用。
// 所以这是里的语法，都是node.js/commonjs语法。

// 注意：每次修改vue.config.js文件，要想生效，必须重启本地服务。
module.exports = {
	// 表示开发环境下的本地服务器（Node.js服务器）
	devServer: {
		port: '9090',
		open: true,
		proxy: {
			// 匹配api请求的路径成功，这个代理服务将转发该请求到target远程
			'/soso': {
				target: 'https://c.y.qq.com',
				changeOrigin: true
			},
			'/api': {
				target: 'https://cnodejs.org',
				changeOrigin: true
			}
		}
	}
}
// 1、9090端口上的浏览器应用程序（网页），使用ajax向本地9090端口发起HTTP请求。（这不跨域，浏览器的CORS管不了）
// 2、本地node服务（devServer）收到上一步操作发送来的请求，通过代理服务来匹配。（devServer.proxy）
// 3、本地node的代理服务匹配成功后，将其转发到远程QQ音乐服务器。（这跨域，但是node环境中没有CORS，所以也不会出问题）
