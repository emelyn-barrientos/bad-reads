import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { removeBook } from '../actions'

function Book(props) {

  const { id, title, author, rating } = props

  const [ isShown, setIsShown ] = useState(false)

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(removeBook(id))
  }

  return (
    <div className='book-card' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      <li key={id}>
        <p>Title:  {title}</p>
        <p>Author:  {author}</p>
        <p>badreads Rating:  {rating}</p>
        {isShown && <button className='delete' onClick={handleClick}>Delete</button>}
      </li>
    </div>
  )
}

export default Book
