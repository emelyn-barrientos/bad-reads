import { SET_BOOKS, ADD_BOOK, DELETE_BOOK } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_BOOKS:
      return payload
    
    case ADD_BOOK:
      return  [...state, payload ]

    case DELETE_BOOK:
      return state.filter((book) => book.id !== payload)
    
    default:
      return state
  }
}

export default reducer