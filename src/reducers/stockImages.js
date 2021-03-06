import { createReducer } from '@reduxjs/toolkit'
import { FETCH_STOCK_IMAGES_SUCCESS, FETCH_STOCK_IMAGES_FAILURE, FETCH_STOCK_IMAGES_UPDATE_SUCCESS } from '../actions'
import { analytics } from '../firebase'

const initialState = { images: [] }

const fetchImageResponse = createReducer(initialState, {
  [FETCH_STOCK_IMAGES_SUCCESS.type]: (state, { payload }) => {
    state.images.push(payload)
  },
  [FETCH_STOCK_IMAGES_FAILURE.type]: (state, { payload }) => {
    state.error = true
    analytics.logEvent('FETCH_STOCK_IMAGES_FAILURE', { error: payload })
  },
  [FETCH_STOCK_IMAGES_UPDATE_SUCCESS.type]: (state, { payload }) => {
    state.images[payload.index] = { url: payload.url }
  }
})

export default fetchImageResponse
