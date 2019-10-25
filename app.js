const Koa = require('koa');
const app = new Koa();
var Router = require('koa-router')();

var admin = require('./src/router/admin')
const cors = require('koa2-cors'),
        bodyParser = require('koa-bodyparser'),
        jsonp = require('koa-jsonp');
Router.get('/',async ctx=>{
    ctx.body = '这是首页'
})

Router.use('/admin', admin)
// 配置bodyparser
app.use(bodyParser());
// 跨域配置
app.use(cors());
//配置jsonp的中间件
app.use(jsonp());
app
  .use(Router.routes())
  .use(Router.allowedMethods());

app.listen(8800,err=>{
    if(err){
        console.log(err)
    }else{
        console.log('服务开启,端口：8800')
    }
})