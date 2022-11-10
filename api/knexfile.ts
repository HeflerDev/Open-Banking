const knexConfig = {
    development: {
        client: 'pg',
        connection: {
            host: 'postgres',
            port: process.env.DB_PORT || 5432,
            user: process.env.DB_USER || 'postgres',
            password: 'postgres',
            database: 'open_bank'
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