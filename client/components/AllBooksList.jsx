import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchBooks } from '../actions'

function AllBooksList() {
  const books = useSelector((state) => state.allBooks)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return (
    <div>
      <h3>Recent hot takes on popular reads:</h3>
      <ul>
        {books && books.map((book) => {
          return <li key={book.id}>
            <p>Title:  {book.title}</p>
            <p>Author:  {book.author}</p>
            <p>badreads Rating:  {book.rating}</p>
          </li>
        }
        )}
      </ul>
    </div>
  )
}

export default AllBooksList
