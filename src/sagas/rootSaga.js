import { call, put, takeEvery } from 'redux-saga/effects'

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const makeRequest = async () => {
  const url = 'https://go-rest-image.herokuapp.com/image'
  //   const url = `https://images.pexels.com/photos/${getRandomInt(
  //     20000,
  //     21090
  //   )}/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=600&w=600&fit=crop`
  const res = await fetch(url)

  // WCS doesn't always return JSON, need to catch any errors
  const payload = await res.json().catch(() => {})

  if (!res.ok) {
    throw payload
  }

  return payload
}

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    console.log('saga time')
    yield delay(1000)

    const response = yield call(makeRequest)
    console.log(response)
    yield put({ type: 'FETCH_IMAGE_SUCCESS', payload: { ...response } })
  } catch (e) {
    yield put({ type: 'FETCH_IMAGE_FAILURE' })
  }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export default function* mySaga() {
  yield takeEvery('FETCH_IMAGE_REQUEST', fetchUser)
}
