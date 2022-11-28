const conn = require('./connection')

function getAllBooks(db = conn) {
  return db('books').select()
}

function addBook (newBook, db = conn) {
  return db('books').insert(newBook)
}

module.exports = {
  getAllBooks,
  addBook
}
