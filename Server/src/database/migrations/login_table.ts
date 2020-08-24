import knex from 'knex'

export async function up(knex: knex){
  return knex.schema.createTable('TableLogin', table =>{
    table.increments('id').primary();
    table.string('User').notNullable();
    table.string('Password')
    
  })
}
export async function down(knex: knex){
  return knex.schema.dropTable('TableLogin')
}