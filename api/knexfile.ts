const knexConfig = {
    development: {
        client: 'postgres',
        connection: {
            user : process.env.PSQL_USER,
            password : process.env.PSQL_PASSWORD,
            database : process.env.PSQL_DATABASE
        }
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: 'migrations'
    },
    seeds: {
        directory: './seeds'
    }
};
export default knexConfig;