export const SET_BOOKS = 'SET_BOOKS'
export const ADD_BOOK ='ADD_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'


import { getListOfBooks, addNewBookToList, deleteThisBook } from '../apis/booksApi'

export function setBooks(books) {
  return {
    type: SET_BOOKS,
    payload: books,
  }
}

export function addBook(newBook) {
  return {
    type: ADD_BOOK,
    payload: newBook
  }
}

export function deleteBook(id) {
  return {
    type: DELETE_BOOK,
    payload: id
  }
}

// THUNKS 
export function fetchBooks() {
  return (dispatch) => {
    return getListOfBooks().then((books) => {
      dispatch(setBooks(books))
    })
  }
}

export function addNewBook(bookObj) {
  return (dispatch) => {
    addNewBookToList(bookObj).then((book) => {
      dispatch(addBook(book))
    })
    .catch((err) => {
      console.log(err.message)
    })
  }
}

export function removeBook(id) {
  return (dispatch) => {
    deleteThisBook(id)
      .then(() => {
        dispatch(deleteBook(id))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
