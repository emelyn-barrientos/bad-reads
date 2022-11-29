const conn = require('./connection')

function getAllBooks(db = conn) {
  return db('books').select()
}

function addBook (newBook, db = conn) {
  return db('books')
    .insert(newBook)
}


function getBookById (id, db = conn) {
  return db('books')
    .where('id', id)
    .first()
}

function deleteOneBook (id, db = conn) {
  return db('books')
    .delete()
    .where('id', id)
}

module.exports = {
  getAllBooks,
  addBook,
  getBookById,
  deleteOneBook
}
