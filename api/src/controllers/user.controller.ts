import * as Koa from 'koa'
import Router from 'koa-router'

import jsonwebtoken from 'jsonwebtoken'

export interface LoginDetails {
    username?: string,
    password?: string
    passwordConf?: string
}

const routerOpts: Router.IRouterOptions = {
    prefix: '/public'
}

const router: Router = new Router(routerOpts)

router.post('/login', async (ctx: Koa.Context) => {
    let login: LoginDetails = ctx.request.body
    if(login.username && login.password && login.password === login.passwordConf) {
        ctx.body = {
            token: jsonwebtoken.sign({
                data: ctx.request.body,
                exp: Math.floor(Date.now() / 1000) - (60 * 60) // 1 hour
            }, "secret")
        }
    } else {
        ctx.status = 500
    }
})

export default router