import app from "@/*";
import request from "supertest"

interface Body {
    data: string
    user_id: number
}

describe("When dealing with bank data", () => {
    const PREFIX = "/banks"

    const testCase = (url: string, body?: Body | null) => {
        return request(app.callback())
            .post(PREFIX + url)
            .send(body)
    }
    it('should post accordingly', async function () {
        const response = await testCase('/insert', {
            data: "Custom Data",
            user_id: 1,
        })
        console.log(response.text)
        expect(response.status).toBe(200)
    });
    it('should get accordingly', async function () {
        const response = await testCase("")

        expect(response.status).toBe(200)
        expect(response.type).toBe('string')
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
