import React from 'react'

import { useDispatch } from 'react-redux'

import { removeBook } from '../actions'

function Book(props) {

  const { id, title, author, rating } = props


  const dispatch = useDispatch()

  const handleClick = () => {
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
