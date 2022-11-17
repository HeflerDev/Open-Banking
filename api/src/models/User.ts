import {DataTypes} from "sequelize";
import db from "../config/Database";

const Users = db.define('users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    refresh_token: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();

export default Users;
// TODO: Remove Comment
// import { Model } from "objection";
//
// export default class User extends Model {
//     public id!:number
//     public username!:string
//     public password!:string
//     public email!:string
//
//     static tableName = 'users'
//     static jsonSchema = {
//         type: "object",
//         required: ['username', 'password', 'email'],
//         properties: {
//             id: {type: 'integer'},
//             username: {type: 'string', minLength: 3, maxLength: 255 },
//             password: { type: 'string', minLength: 3, maxLength: 255},
//             email: { type: 'string', minLength: 3, maxLength: 255},
//         }
//     }
// }