import { SET_BOOKS, ADD_BOOK } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_BOOKS:
      return payload
    
    case ADD_BOOK:
      return  [...state, payload ]

    default:
      return state
  }
}

export default reducer

// {
//   type: 'ADD_BOOK',
//   payload: { title: 'cccc', author: 'ccccc', rating: '1'
// }