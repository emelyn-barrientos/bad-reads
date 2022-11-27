import { combineReducers } from 'redux'

import allBooksReducer from './allBooks'

export default combineReducers({
  allBooks: allBooksReducer
})
