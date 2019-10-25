const Koa = require('koa');
const Router = require('koa-router')();
Router.get('/',async(ctx)=>{
    ctx.body=ctx.query;
    console.log(ctx.query)
})
Router.post('/posttest', async ctx=>{
    let data = ctx.request.body
    console.log(data)
    ctx.body = data
})

module.exports = Router.routes();