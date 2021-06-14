import { call, put, takeEvery } from 'redux-saga/effects'

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

const makeRequest = async () => {
  const url = 'https://go-rest-image.herokuapp.com/image'
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

    const user = yield call(makeRequest)
    console.log(user)
    yield put({ type: 'USER_FETCH_SUCCEEDED', payload: { message: user } })
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export default function* mySaga() {
  yield takeEvery('TOGGLE_DEMO', fetchUser)
}
