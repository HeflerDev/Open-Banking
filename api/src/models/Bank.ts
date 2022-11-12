import {Model} from "objection";

export default class Bank extends Model {
    public id!:number
    public data!: string
    public user_id!: number

    static tableName = 'banks'
    static jsonSchema = {
        type: "object",
        required: ["data", "user_id"],
        properties: {
            id: {type: 'integer'},
            data: {type: 'string'},
            user_id: {type: 'integer'}
        }
    }
}