export const SET_BOOKS = 'SET_BOOKS'
export const ADD_BOOK ='ADD_BOOK'


import { getListOfBooks, addNewBookToList } from '../apis/booksApi'

export function setBooks(books) {
  console.log('setBooks payload: ', books)
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

export function addNewBook() {
  return (dispatch) => {
    return addNewBookToList().then((newBook) => {
      dispatch(addBook(newBook))
    })
  }
}
