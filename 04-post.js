const Koa = require('koa')

const app = new Koa()

const BodyParser = require('koa-bodyparser')

app.use(BodyParser())

app.use((ctx) => {
  ctx.body = ctx.request.body
})

app.listen(3333)