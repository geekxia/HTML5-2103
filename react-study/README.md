created by 2103 at 06-28

# 初始Webpack

- webpack是一个模块打包器：webpack可以把浏览器无法识别的模块及其依赖进行加载、编译、打包，最终输出浏览器能够兼容处理的静态资源（js、css、图片）。
- webpack可以理解成是一个“榨汁机”，把各种水果变成可口的果汁。
- webpack中有很多非常重要的概念：入口、出口、Loaders、Plugins、本地服务等。
- webpack要运行在node这个运行时环境里，所以你的电脑上一定有node环境（我建议node版本必须v12+），webpack的配置文件采用的是CommonJS模块化语法。
- webpack工程默认使用的配置文件叫 'webpack.config.js'，本地运行或打包时，无须使用`--config`来指定配置文件。

```
npm init 初始化package.json文件，用于记录整个脚手架环境的信息
cnpm i webpack-cli -g
cnpm i webpack-cli -D
cnpm i webpack -g
cnpm i webpack -D
```
- `webpack-cli`提供了一些非常好用的webpack命令行，它用于命令行操作。
- `webpack`这个包，提供了Webpack中核心的API，它一般用于写代码。
- 如何运行webpack项目呢？
```
webpack --config xxx.config.js
如果是默认的webpack.config.js，可以不用指定--config
```

# Webpack核心概念的讲解

- entry入口：单入口文件的写法，多入口文件的写法。
- output出口：路径要用绝对路由，加[chunkhash]，自动清除dist目录。
- devServer本地服务：指定静态资源服务器目录，热更新相关知识。
- plugin插件：使用HtmlWebpackPlugin实现html文件和js文件的自动组装。
- 区分生产环境和开发环境：cross-env，webpack-merge，配置文件目录的拆分。
