// config/common.js这个文件是生产环境和开发环境公用的webpack配置

const { resolve } = require('./util.js')

// 用于自动地把html文件和js文件组装起来
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 导入webpack的API包
const webpack = require('webpack')
// 导入自定义的txt-loader

module.exports = {
  // 入口：类比成榨汁机的入口
  // 它用于指定应用程序启动或打包时的入口文件在哪里。
  // 建议指定入口文件时，使用绝对路径，不太建议使用相对路径
  // __dirname，表示当前文件所处文件夹的根目录
  // entry: './src/main.js',
  // entry: resolve(__dirname, 'src/main.js'),
  entry: {
    // 这种写法支持多入口，它可以帮助我们实现多页面应用程序
    app: resolve('src/main.js'),
    // subApp: resolve('src/main.js')
  },
  // 出口：类比成榨汁机的出口
  // 它用于指定文件的输出路径和方式
  // 在做“出口”配置时只能使用绝对路径，使用相对路径会报错。
  output: {
    // 用于指定打包结果的输出目录
    path: resolve('dist'),
    // path: './dist',
    // 输出时指定文件的名字，bundle表示“一束、一捆”
    // filename: 'bundle.js'
    // [name] 代表是的 entry对象中的 key名
    // [hash] 表示模块打包时自动生成的hash字符串
    // [chunkhash] 是一种更加具体的hash生成算法，在打包处理时，如果当前模块及其依赖中没有发生代码变化，那么hash值不会变。
    // 解决“浏览器缓存机制所导致的静态资源代码不更新”的问题
    filename: '[name]-[chunkhash].js',
    // 每次打包时webpack自动删除dist目录，再重新进行打包生成新的dist目录
    // 这个写法是webpack v5的写法
    // 在v4中，使用的是 clean-webpack-plugin 这个插件来实现的
    clean: true
  },
  // 插件：用于修饰、扩展、弥补webpack的功能
  // plugins是一个数组
  plugins: [
    // 这个插件的主要作用是把js文件和index.html组装起来
    // 如果你不指定用哪个index.html文件，这个插件会自动给你一个默认index.html模板
    new HtmlWebpackPlugin({
      // 手动指定使用哪个index.html模板，避免它莫名其妙给我默认模板
      template: resolve('public/index.html'),
      filename: 'index.html',
      title: '2103'
    }),
    // 这个插件是webpack的内置插件，用于显示webpack运行或打包的进度条
    new webpack.ProgressPlugin()
  ],
  // Loaders，用于处理各类不同后缀的文件模块，比如.png/.scss/.ts/.jsx/.vue文件模块
  // 在webpack眼中，一切皆模块module
  // 理解了Loaders这个重要概念，你就理解了Webpack的核心
  module: {
    // rules是一个数组，用于定义处理不同模块的规则
    rules: [

      // 处理图片模块
      // 人话：当webpack运行或打包，如果检测到文件模块的后缀以.png结尾，就使用url-loader来处理这个模块。
      // 注1：这个url-loader的使用方式是webpack v4中的写法，在v5中也可以使用。
      // { test: /.(png|jpg|gif|svg|jpeg)$/, use: ['url-loader'] },
      // 注2：下面是 webpack v5中处理图片类模块的最新写法
      { test: /\.(png|svg|jpg|jpeg|gif)$/, type: 'asset/resource' },

      // 处理样式模块
      // 注1：当有多个loader协同工作、处理模块时，写在数组后面的loader先工作。
      // 注2：在最新的webpack中，不支持把css、sass规则分开写。如果分开写了，sass就报错。
      // webpack v5，经验证支持 node v12，也支持 node v14
      // 疑问：我猜测这与sass-loader、style-loader的最新版本的限制有关？
      // { test: /.css$/, use: ['style-loader', 'css-loader'] },
      // { test: /.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
      // 人话：当webpack运行或打包，如果检测到文件模块的后续以.css结尾，先使用css-loader加载.css文件，再交给style-loader将样式注入到DOM中去。
      // 人话：如果检测到文件模块以.scss结尾，先使用sass-loader加载sass文件，交给sass编译器进行编译，得到css文件；再由css-loader来加载上一步中编译成功的css文件，再次给style-loader将其注入到dom中去。
      // sass-loader只是用于加载.scss文件。
      // sass 这个包要安装，它的作用是用于把sass文件编译成纯粹的css代码。
      { test: /.(css|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      // 如果当前项目要支持less，要安装less编译器、还要安装less-loader。

      // 处理JavaScript模块
      // src中使用了大量的ES6代码，这会导致浏览器兼容性较差，也就是说低版本的浏览器运行程序可能会报错。怎么办呢？——Babel编译器
      // Babel编译器的作用：把不同版本的JS新语法转换成浏览器能够统一识别的ES5代码。
      // 虽然在webpack中，对.js文件导入与导出不会报错。但为了考虑浏览器兼容性，这些.js代码我们不能视而不见。该怎么处理？
      // 人话：当webpack运行或打包，如果检测到文件模块是.js(x)后缀时，就使用babel-loader进行加载，然后交给 Babel编译器进行编译，编译的结果是把ES2015+转换成浏览器能够识别的ES5代码。
      // 注意：在使用Babel时，要环境中添加 babel.config.js 这个配置文件，用于指定使用哪些预设和插件来编译当前代码。
      // exclude属性，指定不对第三方包进行babel编译（因为第三方一般都是编译过的）
      { test: /.(js|jsx)$/, use: ['babel-loader'], exclude: /node_modules/ },

      // 处理txt模块
      { test: /.txt$/, use: ['./config/loaders/txt-loader.js'] },

      // 支持typescript编程
      // 当遇到.ts/.tsx后缀的文件时，使用ts-loader进行加载，
      // 交给typescript、@babel/preset-typescript进行编译。
      { test: /.(ts|tsx)$/, use: ['ts-loader'], exclude: /node_modules/ }
    ]
  },
  // 用于环境解析、别名配置、后缀省略
  resolve: {
    alias: {
      // 指定 @ 等于 src根路径
      '@': resolve('src')
    },
    // 用于忽略指定的文件后缀名（一般省略JavaScript模块）
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.json']
  }
}
