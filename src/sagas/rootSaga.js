import { call, put, takeEvery } from 'redux-saga/effects'

const makeRequest = async () => {
  const url = 'https://go-rest-image.herokuapp.com/image'
  const res = await fetch(url)

  const payload = await res.json().catch(() => {})

  if (!res.ok) {
    throw payload
  }
  return payload
}

function* fetchUser() {
  try {
    const response = yield call(makeRequest)
    yield put({ type: 'FETCH_IMAGE_SUCCESS', payload: { ...response } })
  } catch (e) {
    yield put({ type: 'FETCH_IMAGE_FAILURE' })
  }
}

function* fetchStockImage() {
  try {
    const response = yield call(async () => {
      const url = 'https://picsum.photos/1000'
      const res = await fetch(url)

      const payload = { url: res.url }

      if (!res.ok) {
        throw payload
      }
      return payload
    })
    yield put({ type: 'FETCH_STOCK_IMAGES_SUCCESS', payload: { ...response } })
  } catch (e) {
    yield put({ type: 'FETCH_STOCK_IMAGES_FAILURE' })
  }
}

export default function* mySaga() {
  yield takeEvery('FETCH_IMAGE_REQUEST', fetchUser)
  yield takeEvery('FETCH_STOCK_IMAGES_REQUEST', fetchStockImage)
}
