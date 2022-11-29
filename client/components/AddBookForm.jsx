import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { addNewBook } from '../actions'

function AddBookForm() {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    rating: '',
  })

  useEffect(() => {}, [newBook])

  const dispatch = useDispatch()

  const handleChange = (evt) => {
    setNewBook({
      ...newBook,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(addNewBook(newBook))
    setNewBook({
      title: '',
      author: '',
      rating: '',
    })
  }

  return (
    <div>
      <h3>Add New Bad Read: </h3>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleChange}
            placeholder="ex. Fifty Shades of Grey"
            required
          />

          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleChange}
            placeholder="ex. E. L. James"
            required
          />

          <label htmlFor="rating">Your Bad Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={newBook.rating}
            onChange={handleChange}
            min="0"
            max="3"
            step="0.5"
            placeholder="0 - 3 rating only!"
            required
          />

          <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddBookForm
