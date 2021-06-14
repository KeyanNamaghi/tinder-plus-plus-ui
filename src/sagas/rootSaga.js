import { call, put, takeEvery } from 'redux-saga/effects'

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    console.log('saga time')
    yield delay(1000)

    // const user = yield call(Api.fetchUser, action.payload.userId)
    yield put({ type: 'USER_FETCH_SUCCEEDED', payload: { message: 'Keyan' } })
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export default function* mySaga() {
  yield takeEvery('TOGGLE_DEMO', fetchUser)
}
