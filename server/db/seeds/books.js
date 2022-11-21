exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('books')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        { id: 1, title: 'Tomorrow, Tomorrow, and Tomorrow', author: 'Gabrielle Zevin', my_rating: 5},
        { id: 2, title: 'A Magic Steeped in Poison', author: 'Judy I. Lin', my_rating: 4},
        { id: 3, title: 'The Atlas Six', author: 'Olivie Blake', my_rating: 2},
        { id: 4, title: 'Ace of Spades', author: 'Faridah Àbíké-Íyímídé', my_rating: 3.5},
      ])
    })
}
