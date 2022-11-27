import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addBook } from '../actions'

//-- TODOs --//
// [x] Create form to add new book
// [x] Create button for add new book
// [x] Create eventHandlers for onSubmit and onChange
// [x] Import useDispatch, useState hooks
// [] Create new ADD_FRUIT action and import
// [] Create new addNewBook reducer & possibly thunk?

function AddBookForm() {
  
  const [ newBook, setNewBook ] = useState('')
  const dispatch = useDispatch()

  const handleChange = (evt) => {
    setNewBook({
      ...newBook,
      [evt.target.name]: evt.target.value,
    }) 
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(addBook(newBook))
    setNewBook('')
  }

  return (
    <div>
      <h3>Add New Bad Read: </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title: </label>
        <input type='text' id='title' name='title' value={newBook.title} onChange={handleChange}/>

        <label htmlFor='author'>Author: </label>
        <input type='text' id='author' name='author' value={newBook.author} onChange={handleChange}/>

        <label htmlFor='ratiing'>Your Bad Rating:</label>
        <input type='number' id='rating' name='rating' value={newBook.rating} onChange={handleChange}/>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddBookForm
