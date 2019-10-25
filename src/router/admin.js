const Koa = require('koa');
const Router = require('koa-router')();
const news = require('./admin/news');
const { query } = require('../db/index')
Router.get('/',async (ctx)=>{
    
    var catelist = await query('SELECT * FROM my_class');
    ctx.body=catelist;
})
Router.use('/news',news)

module.exports = Router.routes();