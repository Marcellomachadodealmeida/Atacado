import knex from 'knex'

export async function up(knex: knex){
  return knex.schema.createTable('products', table =>{
    table.increments('id').primary();
    table.string('name_product').notNullable();
    table.float('price').notNullable();
    table.integer('amaunt').notNullable();

    table.integer('brand_id')
      .notNullable()
      .references('id')
      .inTable('brand')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      
  })
}
export async function down(knex: knex){
  return knex.schema.dropTable('products')
}