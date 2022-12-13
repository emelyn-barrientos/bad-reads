exports.up = function (knex) {
  return knex.schema.createTable('books', (table) => {
    table.increments('id')
    table.text('title')
    table.text('author')
    table.integer('rating')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('books')
}
