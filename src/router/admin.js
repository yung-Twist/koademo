const Koa = require('koa');
const Router = require('koa-router')();
const index = new Koa()
Router.get('/',async(ctx)=>{
    ctx.body="这是前台首页";
})

module.exports = Router.routes();