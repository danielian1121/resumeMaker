'use strict'

import Koa from 'koa'
import Router from '@koa/router'

const app = new Koa()
const router = new Router()

router.get('hearbeat', '/health', ctx => {
    ctx.status = 200
})

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(8000)
