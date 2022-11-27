exports.seed = function (knex) {
  return knex('books')
    .del()
    .then(function () {
      return knex('books').insert([
        { id: 1, title: 'The Atlas Six', author: 'Olivie Blake', rating: 2 },
        { id: 2, title: 'House of Sky and Breath (Crescent City, 2)', author: 'Sarah J. Maas', rating: 1.5 },
        { id: 3, title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reed', rating: 1 },
      ])
    })
}
