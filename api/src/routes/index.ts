import Koa from "koa";
import {getUsers, Login, Logout, Register} from "../controllers/user.controller";
import {verifyToken} from "../middleware/verifyToken";
import {refreshToken} from "../controllers/refreshToken.controller";
import Router from "koa-router";

const router: Router = new Router()

router.get('/users', verifyToken, getUsers)
router.post("/users", Register)
router.post("/login", Login)
router.get('/token', refreshToken)
router.delete('/logout', Logout)

export default router