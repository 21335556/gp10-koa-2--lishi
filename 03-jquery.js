const Koa = require('koa')

const app = new Koa()

app.use((ctx) => {
  ctx.body = {
    q: ctx.query,
    rq: ctx.request.query
  }
})

app.listen(3333)