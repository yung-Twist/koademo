const Koa = require('koa');
const Router = require('koa-router')();
const index = new Koa()
Router.get('/',async(ctx,next)=>{
    ctx.body="这是前台首页";
})

index
  .use(Router.routes())
  .use(Router.allowedMethods());
module.exports = index;