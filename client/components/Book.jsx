import React from 'react'

import { useDispatch } from 'react-redux'

import { removeBook } from '../actions'

// DELETE BOOK FEATURE
// [x] Import useDispatch
// [x] Add onClick event handler and button
// [x] Dispatch book ID to thunk
// [] Make deleteBook thunk
// [] Make deleteBook api request
// [] Import removeBook from actions
// [] Make deleteBook action


function Book(props) {

  const { id, title, author, rating } = props

  const dispatch = useDispatch()

  const handleClick = (id) => {
    dispatch(removeBook(id))
  }

  return (
    <div>
      <li key={id}>
        <p>Title:  {title}</p>
        <p>Author:  {author}</p>
        <p>badreads Rating:  {rating}</p>
        <button className='delete' onClick={handleClick}>Delete</button>
      </li>
    </div>
  )
}

export default Book
