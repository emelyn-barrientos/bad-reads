const express = require('express')

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

  db.addBook(newBook)
    .then((id) => {
      return db.getBookById(id)
    })
    .then((results) => {
      res.json(results)
    })
    .catch((err) => res.status(500).json( {message: err.message} ))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteOneBook(id)
    .then(() => {
      return res.sendStatus(200)
    })
    .catch((err) => {
      console.log(err.message)
    })
})

module.exports = router
