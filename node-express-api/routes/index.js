var express = require('express');
var router = express.Router();

/*  */
router.get('/', function(req, res, next) {
  // 数据库查询（M）得到的动态数据
  const model = {
    title: 'Hello 2103',
    list: [
      { id: 1, name: 'zhang san', age: 10 },
      { id: 2, name: 'li si', age: 20 },
      { id: 3, name: 'wang wu', age: 30 }
    ]
  }
  // 渲染发生在服务端的模板引擎环境中
  res.render('index', model);  // M + V
});

module.exports = router;
