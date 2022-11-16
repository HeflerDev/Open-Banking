import Users from "../models/User";
import jwt from "jsonwebtoken";
import Koa from "koa";

const bcrypt = require("bcrypt")

// TODO:Refactor Login Details
interface LoginDetails {
    username?: string,
    email?: string
    password?: string
    passwordConf?: string
}

export const getUsers = async (req: any, res: any) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'name', 'email']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async (ctx: Koa.Context) => {
    const {username, email, password, passwordConf}: LoginDetails = ctx.request.body;
    if (password !== passwordConf) {
        ctx.status = 500
        ctx.body = {msg: "Password Mismatch"}
        return ctx.toJSON()
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            username: username,
            email: email,
            password: hashPassword
        });
        ctx.status = 200
        ctx.body = {msg: "Registration Successful"};
    } catch (error) {
        console.log(error);
    }
}

export const Login = async (ctx: Koa.Context) => {
    const {email, password}: LoginDetails = ctx.request.body
    try {
        const user: any = await Users.findAll({
            where: {
                email: email
            }
        });
        const match = await bcrypt.compare(password, user[0].password);
        if (!match) {
            ctx.status = 404;
            ctx.body = {msg: "Password Mismatch"}
            return ctx.toJSON();
        }
        const userId = user[0].id;
        const name = user[0].username;
        const userEmail = user[0].email;
        const accessToken = jwt.sign({userId, name, userEmail}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '15s'
        });
        const refreshToken = jwt.sign({userId, name, userEmail}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        await Users.update({refresh_token: refreshToken}, {
            where: {
                id: userId
            }
        });

        ctx.cookies.set('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        ctx.status = 200
        ctx.body = accessToken
    } catch (error) {
        console.log(error)
        ctx.status = 404;
        ctx.body = "Error"
        return ctx.toJSON()
    }
}

export const Logout = async (req: any, res: any) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const user: any = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    });
    if (!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({refresh_token: null}, {
        where: {
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}
// TODO: Remove comment
// import * as Koa from 'koa'
// import Router from 'koa-router'
//
// import jsonwebtoken from 'jsonwebtoken'
//
//
// const routerOpts: Router.IRouterOptions = {
//     prefix: '/public'
// }
//
// const router: Router = new Router(routerOpts)
//
// router.post('/login', async (ctx: Koa.Context) => {
//     let login: LoginDetails = ctx.request.body
//     if(login.username && login.password && login.password === login.passwordConf) {
//         ctx.body = {
//             token: jsonwebtoken.sign({
//                 data: ctx.request.body,
//                 exp: Math.floor(Date.now() / 1000) - (60 * 60) // 1 hour
//             }, "secret")
//         }
//     } else {
//         ctx.status = 500
//     }
// })
//
// export default router