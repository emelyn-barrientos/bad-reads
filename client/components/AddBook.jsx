import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

//-- TODOs --//
// [] Create form to add new book
// [x] Create button for add new book
// [x] Create eventHandlers for onSubmit and onChange
// [x] Import useDispatch, useState hooks
// [] Create new ADD_FRUIT action and import
// [] Create new addNewBook reducer & possibly thunk?

function AddBook() {
  
  const [ newBook, setNewBook ] = useState('')
  const dispatch = useDispatch()

  const handleChange = (evt) => setNewBook(evt.target.value) 

  const handleSubmit = (evt) => {
    evt.preventDefault()

    dispatch(setNewBook(newBook))
    setNewBook('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='book'>Add Bad Book: </label>
        <input id='book' type='text' value={newBook} onChange={handleChange}/>
        <button>Submit</button>
        {/* <label htmlFor='book'>Author: </label>
        <input id='author'/>
        <label htmlFor='raiting'>badreads Rating: </label>
        <input id='rating'/> */}
      </form>
    </div>
  )
}

export default AddBook
