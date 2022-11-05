import Koa from 'koa'
import Knex from 'knex'
import bodyParser from "koa-bodyparser";
import { Model } from "objection";
import knexConfig from "knexfile";
import userController from "src/controllers/user.controller";
import jwt from 'koa-jwt'
import cors from '@koa/cors'

const knex = Knex(knexConfig.development)
Model.knex(knex)

const app: Koa = new Koa();
app.use(bodyParser())
app.use(cors())

app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
    try {
        await next();
    } catch (error) {
        ctx.status = error.statusCode || error.status;
        error.status = ctx.status;
        ctx.body = { error };
        ctx.app.emit('error', error, ctx);
    }
});

app.use(jwt({
    secret: 'secret'
}).unless({
    path: [/^\/public/, "/"]
}))

app.use(userController.routes())
app.use(userController.allowedMethods())
// TODO: ADD the middleware for the upcoming data Model

app.use(bodyParser());
app.use(async (ctx:Koa.Context) => {
    ctx.body = "Hello World"
});

app.on('error', console.error);
app.listen(4000);

export default app;