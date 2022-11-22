import { getListOfBooks } from '../apis/booksApi'

export const SET_BOOKS = 'SET_BOOKS'

export function setBooks(books) {
  return {
    type: SET_BOOKS,
    payload: books,
  }
}

export function fetchBooks() {
  return (dispatch) => {
    return getListOfBooks().then((books) => {
      dispatch(setBooks(books))
    })
  }
}
