import {Sequelize} from "sequelize";

const db = new Sequelize("open_bank", "postgres", "postgres", {
    host: "postgres",
    dialect: "postgres"
})

export default db;