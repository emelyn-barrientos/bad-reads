import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { addNewBook } from '../actions'

function AddBookForm() {
  
  const [ newBook, setNewBook ] = useState({
    title: '',
    author: '',
    rating: ''
  })

  useEffect(() => {
    
  },[newBook])

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
    setNewBook('')
  }

  return (
    <div>
      <h3>Add New Bad Read: </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title: </label>
        <input type='text' id='title' name='title' onChange={handleChange}/>

        <label htmlFor='author'>Author: </label>
        <input type='text' id='author' name='author' onChange={handleChange}/>

        <label htmlFor='ratiing'>Your Bad Rating:</label>
        <input type='number' id='rating' name='rating' onChange={handleChange}/>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddBookForm
