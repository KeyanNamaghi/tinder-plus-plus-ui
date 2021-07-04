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
      const url = 'https://picsum.photos/600/1200'
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

function* fetchStockImageUpdate({ payload }) {
  try {
    const response = yield call(async () => {
      const url = 'https://picsum.photos/600/1200'
      const res = await fetch(url)

      const payload = { url: res.url }

      if (!res.ok) {
        throw payload
      }
      return payload
    })
    yield put({ type: 'FETCH_STOCK_IMAGES_UPDATE_SUCCESS', payload: { index: payload, ...response } })
  } catch (e) {
    yield put({ type: 'FETCH_STOCK_IMAGES_UPDATE_FAILURE' })
  }
}

export default function* mySaga() {
  yield takeEvery('FETCH_IMAGE_REQUEST', fetchUser)
  yield takeEvery('FETCH_STOCK_IMAGES_REQUEST', fetchStockImage)
  yield takeEvery('FETCH_STOCK_IMAGES_UPDATE_REQUEST', fetchStockImageUpdate)
}
