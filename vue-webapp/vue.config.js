module.exports = function() {
	return {
		// publicPath: '/webapp',
		// 关闭文件的hash值（不建议关闭）
		// vue项目打包之后，dist文件夹中的文件都hash值，为什么什么做？（解决浏览器缓存所导致的静态资源文件无法更新的问题）
		filenameHashing: true,
		// 本地服务器只对开发环境起作用，不影响npm run build
		devServer: {
			open: true,
			port: 8090,
			// 接口代理
			proxy: {
				'/api': {
					target: 'http://localhost:9999',  // 你自己的node服务器地址
					changeOrigin: true
				}
			}
		},
		// vue实现多页面应用程序
		pages: {
			// 对应index.html页面
	    index: {
	      entry: 'src/main.js',
	      template: 'public/index.html',
	      filename: 'index.html',
	      title: '首页'
	    },
			// 对应product.html页面
			product: {
				entry: 'src/product.js',
	      template: 'public/product.html',
	      filename: 'product.html',
	      title: '产品'
			}
	  }
	}
}
