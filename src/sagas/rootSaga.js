import { call, put, takeEvery } from 'redux-saga/effects'

// const stockURL = 'https://picsum.photos/800/1200.webp'
const stockURL =
  'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1&api_key=ba701805-8fb9-468d-bdec-eefc0bed4fa4'

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
      const url = stockURL
      const res = await fetch(url)

      const data = await res.json()
      const payload = { url: data[0].url }

      if (!res.ok) {
        throw payload
      }
      return payload
    })
    yield put({ type: 'FETCH_STOCK_IMAGES_SUCCESS', payload: { ...response } })
  } catch (e) {
    yield put({ type: 'FETCH_STOCK_IMAGES_FAILURE', payload: e })
  }
}

function* fetchStockImageUpdate({ payload }) {
  try {
    const response = yield call(async () => {
      const url = stockURL
      const res = await fetch(url)

      const data = await res.json()
      const payload = { url: data[0].url }

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
