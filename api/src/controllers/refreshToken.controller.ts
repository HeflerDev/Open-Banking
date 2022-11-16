import Users from "../models/User";
import jwt from "jsonwebtoken";
import Koa from "koa";

export const refreshToken = async (ctx: Koa.Context) => {
    try {
        const refreshToken = ctx.cookies.get("refreshToken");
        if (!refreshToken) {
            ctx.status = 404;
            ctx.body = {msg: "Token not found"}
        }

        const user: any = await Users.findAll({
            where: {
                refresh_token: refreshToken
            }
        });
        if (!user[0]) {
            ctx.status = 403;
            ctx.body = {msg: "Forbidden"}
        }

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err: any, decoded: any) => {
            if (err) {
                ctx.status = 403;
                ctx.body = {msg: err}
            }

            const userId = user[0].id;
            const name = user[0].name;
            const email = user[0].email;
            ctx.body = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '15s'
            })
        });
    } catch (error) {
        console.log(error);
    }
}