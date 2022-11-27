import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Book from './Book'

import { fetchBooks } from '../actions'

function AllBooksList() {

  const books = useSelector((state) => state.allBooks)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
  },[])

  return (
    <div>
      <ul>
        {books.map(book => {
          return <Book key={book.id} title={book.title} author={book.author} rating={book.rating}/>
        })}
      </ul>
    </div>
  )
}

export default AllBooksList