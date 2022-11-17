import jwt from "jsonwebtoken";
import Koa from "koa";

export const verifyToken = async (ctx: Koa.Context, next: Koa.Next) => {
    const authHeader = ctx.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return ctx.status = 401;
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, decoded: any) => {
        if (err) return ctx.status = 403;
        ctx.body = decoded.email;
        next();
    })
}