import request from 'superagent'

const rootUrl = '/api/v1'

export function getFruits() {
  return request
    .get(`${rootUrl}/fruits`)
    .then((res) => res.body.fruits)
    .catch(logError)
}

export function addFruit(fruit, token) {
  return request
    .post(`${rootUrl}/fruits`)
    .set('Authorization', `Bearer ${token}`)
    .send({ fruit })
    .then((res) => res.body.fruits)
    .catch(logError)
}

export function updateFruit(fruit, token) {
  return request
    .put(`${rootUrl}/fruits`)
    .set('Authorization', `Bearer ${token}`)
    .send({ fruit })
    .then((res) => res.body.fruits)
    .catch(logError)
}

export function deleteFruit(id, token) {
  return request
    .delete(`${rootUrl}/fruits/${id}`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body.fruits)
    .catch(logError)
}

function logError(err) {
  if (err.response.text === 'Username Taken') {
    throw new Error('Username already taken - please choose another')
  } else if (err.message === 'Forbidden') {
    throw new Error(
      'Only the user who added the fruit may update and delete it'
    )
  } else {
    console.error('Error consuming the API (in client/api.js):', err.message)
    throw err
  }
}
