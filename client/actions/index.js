export const SET_BOOKS = 'SET_BOOKS'
export const ADD_BOOK ='ADD_BOOK'


import { getListOfBooks, addNewBookToList } from '../apis/booksApi'

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
