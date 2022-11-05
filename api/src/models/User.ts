import { Model } from "objection";

export default class User extends Model {
    public id!:number
    public username!:string
    public password!:string
    public email!:string

    static tableName = 'users'
    static jsonSchema = {
        type: "object",
        required: ['username', 'password', 'email'],
        properties: {
            id: {type: 'integer'},
            username: {type: 'string', minLength: 3, maxLength: 255 },
            password: { type: 'string', minLength: 3, maxLength: 255},
            email: { type: 'string', minLength: 3, maxLength: 255},
        }
    }
}