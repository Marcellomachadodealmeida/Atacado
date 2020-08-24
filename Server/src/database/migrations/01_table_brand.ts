import knex from 'knex'

export async function up(knex: knex){
  return knex.schema.createTable('brand', table =>{
    table.increments('id').primary();
    table.string('name_brand').notNullable();
    

    table.integer('category_id')
      .notNullable()
      .references('id')
      .inTable('category')
      .onUpdate('CASCADE');
      
  })
}
export async function down(knex: knex){
  return knex.schema.dropTable('brand')
}