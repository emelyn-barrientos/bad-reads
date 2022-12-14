const express = require('express')
const path = require('path')

const booksRoutes = require('./routes/books')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/books', booksRoutes)

module.exports = server
