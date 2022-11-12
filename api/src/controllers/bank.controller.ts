import * as Koa from 'koa'
import Router from 'koa-router'

const routerOpts: Router.IRouterOptions = {
    prefix: '/banks'
}

const router: Router = new Router(routerOpts)

router.post('/insert', async (ctx: Koa.Context) => {})
router.get('/list', async (ctx: Koa.Context)=> {})

export default router