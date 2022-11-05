import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('users', (table:Knex.TableBuilder) => {
        table.increments('id').primary()
        table.string("username")
        table.string("password")
        table.integer("email")
    })
    // TODO: Create the Migration for the open_bank data
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('user')
}

