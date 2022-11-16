import Koa from "koa"
import dotenv from "dotenv";
import cookie from "koa-cookie"
import cors from "@koa/cors";
import db from "./config/Database.js";
import router from "./routes";
import bodyParser from "koa-bodyparser";

dotenv.config();
const app: Koa = new Koa();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookie());
app.use(bodyParser())
app.use(router.routes());

app.listen(4000, () => console.log('Server running at port 4000'));
// TODO: Remove Comment
// import Koa from 'koa'
// import Knex from 'knex'
// import bodyParser from "koa-bodyparser";
// import {Model} from "objection";
// import knexConfig from "../knexfile";
// import userController from "./controllers/user.controller";
// import bankController from "./controllers/bank.controller";
// import jwt from 'koa-jwt';
// import cors from '@koa/cors';
//
// const knex = Knex(knexConfig.development)
// Model.knex(knex)
//
// const app: Koa = new Koa();
// app.use(bodyParser())
// app.use(cors())
//
// app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
//     try {
//         await next();
//     } catch (error) {
//         ctx.status = error.statusCode || error.status;
//         error.status = ctx.status;
//         ctx.body = {error};
//         ctx.app.emit('error', error, ctx);
//     }
// });
//
// app.use(jwt({
//     secret: 'secret'
// }).unless({
//     path: [/^\/public/, "/"]
// }))
//
// app.use(userController.routes())
// app.use(userController.allowedMethods())
// app.use(bankController.routes())
// app.use(bankController.allowedMethods())
//
// app.use(bodyParser());
// app.use(async (ctx: Koa.Context) => {
//     ctx.body = "Hello World"
// });
//
// app.on('error', console.error);
//
// if (require.main === module) {
//     app.listen(4000);
// }
//
// export default app;