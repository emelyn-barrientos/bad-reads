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
    <>
      <div>
        <h3>Books I've read recently:</h3>
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

export default AllBooksList
