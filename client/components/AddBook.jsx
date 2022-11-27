import React, { useEffect } from 'react'

//-- TODOs --//
// [] Create form to add new book
// [] Create button for add new book
// [] Create eventHandlers for onSubmit and onChange
// [] Import useDispatch, useState hooks
// [] Create new ADD_FRUIT action and import
// [] Create new addNewBook reducer & possibly thunk?

function AddBook() {

  return (
    <div>
      <form>
        <label htmlFor='book'>Add New Book: </label>
        <input id='book'/>
        <label htmlFor='book'>Author: </label>
        <input id='author'/>
        <label htmlFor='raiting'>badreads Rating: </label>
        <input id='rating'/>
      </form>
    </div>
  )
}

export default AddBook
