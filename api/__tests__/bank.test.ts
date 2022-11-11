import app from "../src/index";
import request from "supertest"
import {describe} from "node:test";

describe("When dealing with bank data", () => {
    it('should post accordingly', function () {
        
    });
    it('should get accordingly', function () {
        
    });
    it('should return error with invalid data', function () {
        
    });
})

// describe("Testing POSTS endpoints", () => {
//     it('responds with valid HTTP code', async () => {
//         const response = await request(app.callback())
//             .post("/public/login")
//             .send({
//                 username: "Default",
//                 password: "Default",
//                 passwordConf: "Default"
//             })
//         expect(response.status).toBe(200)
//         expect(response.text).toMatch("token")
//     })
//     it('should return error with bad input', async function () {
//         const response = await request(app.callback())
//             .post("/public/login")
//             .send({
//                 username: "",
//                 password: "default",
//                 passwordConf: "wrong"
//             })
//
//         expect(response.status).not.toBe(200)
//         expect(response.status).toBe(500)
//     });
// })
