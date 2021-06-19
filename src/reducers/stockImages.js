import { createReducer } from '@reduxjs/toolkit'
import { FETCH_STOCK_IMAGES_SUCCESS, FETCH_STOCK_IMAGES_FAILURE, FETCH_STOCK_IMAGES_REMOVE } from '../actions'

const initialState = { images: [] }

const fetchImageResponse = createReducer(initialState, {
  [FETCH_STOCK_IMAGES_SUCCESS.type]: (state, { payload }) => {
    state.images.push(payload)
    if (state.images.length > 5) state.images.shift()
  },
  [FETCH_STOCK_IMAGES_FAILURE.type]: (state) => {
    state.error = true
  },
  [FETCH_STOCK_IMAGES_REMOVE.type]: (state, { payload }) => {
    state.images.shift()
  }
})

export default fetchImageResponse
