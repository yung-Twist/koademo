const Koa = require('koa');
const app = new Koa();
var Router = require('koa-router')();

var admin = require('./src/router/admin')

Router.use('/admin', admin)

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