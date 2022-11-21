const conn = require('./connection')

function getAllBooks(db = conn) {
  return db('books').select()
}

module.exports = {
  getAllBooks,
}
