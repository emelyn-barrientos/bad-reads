import request from 'superagent'

const rootUrl = '/api/v1'

export function getListOfBooks() {
  return request.get(rootUrl + '/books').then((res) => {
    return res.body.books
  })
}
