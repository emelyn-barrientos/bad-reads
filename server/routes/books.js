const express = require('express')
const req = require('express/lib/request')

const db = require('../db/books')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllBooks()
    .then((results) => {
      res.json({ books: results.map((book) => book) })
    })
    .catch((err) => res.status(500).json( {message: err.message} ))
})

router.post('/', (req, res) => {
  const newBook = req.body
  console.log(newBook)

  db.addBook(newBook)
    .then((bookArr) => {
      res.json(bookArr)
    })
    .catch((err) => res.status(500).json( {message: err.message} ))
})

module.exports = router
