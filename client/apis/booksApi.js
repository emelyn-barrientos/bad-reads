import request from 'superagent'

const rootUrl = '/api/v1'

export function getListOfBooks() {
  return request.get(rootUrl + '/books').then((res) => {
    return res.body.books
  })
}

export function addNewBookToList(newBook) {
  return request
    .post(rootUrl + '/books')
    .send(newBook)
    .then((res) => {
      return res.body
    })
}

export function deleteThisBook(id) {
  return request.delete(rootUrl + '/books/' + id).then((res) => {
    return res.body
  })
}
