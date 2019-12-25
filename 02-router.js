const Koa = require('koa')

// const Router = require('koa-router')

const router = require('./router/')

const app = new Koa()

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3333, () => {
  console.log('localhost:3333')
})