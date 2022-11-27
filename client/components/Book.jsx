import React from 'react'

function Book(props) {

  const { id, title, author, rating } = props

  return (
    <div>
      <li key={id}>
        <p>Title:  {title}</p>
        <p>Author:  {author}</p>
        <p>badreads Rating:  {rating}</p>
      </li>
    </div>
  )
}

export default Book
