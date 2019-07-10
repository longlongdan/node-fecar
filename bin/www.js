const koa = require('koa');
const app = new koa();
const http = require('http');
const mongoose = require('mongoose');

//链接数据库
mongoose.connect("mongodb://localhost:27017/test");
const con = mongoose.connection;
con.on('error',() => {
    console.log("数据库链接失败");
})
con.once('open', () => {
    console.log("数据库链接成功");
})
app.use(ctx => {
    ctx.body = "Hello Index2!"
    //克隆gitlab上面的代码
    console.log(123);
})

app.listen(3000);