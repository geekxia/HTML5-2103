var express = require('express')
var app = express()


app.use(express.static('public'))

app.listen(8008, ()=>console.log('server is running on 8008'))
