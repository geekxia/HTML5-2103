created by 2103 at 06-23

# 环境搭建与基础配置

```
cnpm i express-generator -g
```
```
express --view=ejs node-fullstack
cd node-fullstack
cnpm i
npm start
```
- 把package.json中启动项目的方式， 改成用nodemon / supervisor 来启动，解决热更新问题。
- 改端口，在 ./bin/www 这个文件中，每次修改这个文件，都要重启项目。
- bin 是项目的入口文件
- public 是静态资源服务器目录
- routes 你可以理解成 MVC 中 C
- views 你可以理解成 MVC 中 V （这里面放的是 ejs 模板文件），它可以支持前后端不分离（服务端渲染）
- app.js 是整个node服务器项目的核心，里面放的是"node中间件"，这些中间件是用于处理HTTP请求的。


# 假数据
```

{
    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/1.png",
    "price" : 90,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "car",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}


{
    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/2.png",
    "price" : 680,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "digital",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}

{
    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/3.png",
    "price" : 200,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "office",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}

{
    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/4.png",
    "price" : 170,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "office",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}


{
    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/5.png",
    "price" : 2400,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "electrical",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}

{
    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/6.png",
    "price" : 200,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "beauty",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}

{
    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/7.png",
    "price" : 500,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "beauty",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}

{
    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/8.png",
    "price" : 300,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "clothe",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}


{

    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/9.png",
    "price" : 800,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "clothe",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}

{
    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/10.png",
    "price" : 100,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "maternal",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}

{
    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/11.png",
    "price" : 1300,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "book",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}

{
    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/12.png",
    "price" : 2500,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "sport",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}

{

    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/13.png",
    "price" : 70,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "fresh",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}

{
    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/14.png",
    "price" : 30,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "fresh",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}

{
    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/15.png",
    "price" : 270,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "drink",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}


{

    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/16.png",
    "price" : 2300,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "gem",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}


{

    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/17.png",
    "price" : 10,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "music",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}


{
    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/18.png",
    "price" : 111,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "pet",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}

{

    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/19.png",
    "price" : 7000,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "pet",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}


{
    "name" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "img" : "/cdn/20.png",
    "price" : 10000,
    "desc" : "汐颜2021夏季新款女装宽松遮肚收腰减龄裙子中长款印花短袖雪纺连衣裙803 花色 L【此款偏大，建议拍小一码】",
    "cate" : "clean",
    "rank" : 20,
    "hot" : true,
    "star" : 800,
    "status" : 1
}
```


```
{
    "cate" : "digital",
    "cate_zh" : "手机数码"
}
{
    "cate" : "office",
    "cate_zh" : "电脑办公"
}
{
    "cate" : "electrical",
    "cate_zh" : "家用电器"
}
{
    "cate" : "beauty",
    "cate_zh" : "美妆护肤"
}
{
    "cate" : "clean",
    "cate_zh" : "个人清洁"
}
{
    "cate" : "car",
    "cate_zh" : "汽车生活"
}
{
    "cate" : "clothe",
    "cate_zh" : "男装女装"
}
{
    "cate" : "maternal",
    "cate_zh" : "母婴儿童"
}
{
    "cate" : "book",
    "cate_zh" : "图书音像"
}
{
    "cate" : "sport",
    "cate_zh" : "运动户外"
}
{
    "cate" : "fresh",
    "cate_zh" : "食品生鲜"
}
{
    "cate" : "drink",
    "cate_zh" : "饮料酒水"
}
{
    "cate" : "gem",
    "cate_zh" : "钟表珠宝"
}
{
    "cate" : "music",
    "cate_zh" : "玩具乐器"
}
{
    "cate" : "pet",
    "cate_zh" : "宠物生活"
}
```
