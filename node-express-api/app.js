var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 创建Express服务器
var app = express();
// 连接数据库
require('./utils/connect')

// 设置解析EJS模板引擎的引擎中间件
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 设置“日志打印”的中间件
app.use(logger('dev'));

// 设置解析POST请求body体内容的中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 设置解析cookie的中间件
app.use(cookieParser());

// 设置静态资源服务器的中间件
app.use(express.static(path.join(__dirname, 'public')));

// 咱们node开发者自定义的中间件（动态资源服务）
// MVC中的C
var version = '/api/v1'
app.use('/', require('./routes/index'));
app.use(`${version}/user`, require('./routes/users'))
app.use(`${version}/good`, require('./routes/goods'))
app.use(`${version}/cart`, require('./routes/carts'))
// 管理系统
app.use(`${version}/admin`, require('./routes/admin'))
app.use(`${version}/upload`, require('./routes/upload'))


// 设置处理404问题的中间件
app.use(function(req, res, next) {
  next(createError(404));
});

// 设置处理node服务器错误的中间件
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// 如果进一步深入理解这些中间件？
// 这些中间件是有严格的顺序要求的，不能随便排序。
// 你可以把这些有顺序要求的中间件理解成工厂中流水线上一个个的工人，每个工人负责一部分事。
// 实际上HTTP请求，就是一个由“请求过程”+“响应过程”组成的一条流水线。
// app.js中的中间件，大约由三个部分组成：用于处理请求过程的中间件，用于动态资源处理的中间件，用于处理错误异常的中间件。
