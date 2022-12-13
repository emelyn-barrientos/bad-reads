import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Book from './Book'

import { fetchBooks } from '../actions'

function AllBooksList() {
  const books = useSelector((state) => state.allBooks)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return (
    <div className="list-container">
      <ul>
        {books &&
          books.map((book) => {
            return (
              <Book
                key={book.id}
                book={book}
              />
            )
          })}
      </ul>
    </div>
  )
}

export default AllBooksList
