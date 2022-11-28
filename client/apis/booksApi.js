import request from 'superagent'

const rootUrl = '/api/v1'

export function getListOfBooks() {
  return request.get(rootUrl + '/books').then((res) => {
    return res.body.books
  })
}

export function addNewBookToList() {
  return request.post(rootUrl + '/books').then((res) => {
    console.log('res.body.newBook: ', res.body.newBook)
    return res.body.newBook
  })
}


