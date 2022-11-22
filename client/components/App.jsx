import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchBooks } from '../actions'

function App() {
  const books = useSelector((state) => state.allBooks)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return (
    <>
      <div className="app">
        <h1>Better Reads</h1>
        <h2>Because books deserve better & I have some hot takes on the most popular titles.</h2>
        <ul>
          {books && books.map((book) => {
           return <li key={book.id}>
             <p>Title:  {book.title}</p>
             <p>Author:  {book.author}</p>
             <p>My Rating:  {book.my_rating}</p>
            </li>
          }
          )}
        </ul>
      </div>
    </>
  )
}

export default App
