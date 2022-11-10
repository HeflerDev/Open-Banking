import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('users', (table:Knex.TableBuilder) => {
        table.increments('id').primary()
        table.string("username")
        table.string("password")
        table.integer("email")
    })
    await knex.schema.createTable('banks',(table:Knex.TableBuilder) => {
        table.increments('id').primary()
        table.string("name")
        table.uuid("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('user')
    await knex.schema.dropTableIfExists('bank')
}

