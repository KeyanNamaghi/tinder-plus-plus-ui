import { createReducer } from '@reduxjs/toolkit'
import { FETCH_IMAGE_SUCCESS, FETCH_IMAGE_FAILURE } from '../actions'

const initialState = { id: '', url: '', category: '', image: '', error: false }

const fetchImageResponse = createReducer(initialState, {
  [FETCH_IMAGE_SUCCESS.type]: (state, { payload }) => {
    state.id = payload.id
    state.url = payload.url
    state.category = payload.category
    state.image = 'data:image/png;base64,' + payload.image
    state.error = false
  },

  [FETCH_IMAGE_FAILURE.type]: (state) => {
    state.id = ''
    state.url = ''
    state.category = ''
    state.image = ''
    state.error = true
  }
})

export default fetchImageResponse
