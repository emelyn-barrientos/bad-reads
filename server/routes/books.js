const express = require('express')

const db = require('../db/books')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllBooks()
    .then((results) => {
      console.log('getAllBooks results: ', results)
      res.json({ books: results.map((book) => book) })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
