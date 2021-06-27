import { createReducer } from '@reduxjs/toolkit'
import { LIKE_CURRENT_CARD_REQUEST, LIKE_CURRENT_CARD_SUCCESS, LIKE_CURRENT_CARD_FAILURE } from '../actions'

const cardState = {
  url: '',
  primary: false,
  offscreen: false,
  index: 0
}

let initialArray = [
  { ...cardState, primary: true },
  { ...cardState, index: 1 },
  { ...cardState, index: 2 },
  { ...cardState, index: 3 }
]

const initialState = { cards: initialArray, error: null, currentIndex: 0 }

const fetchImageResponse = createReducer(initialState, {
  [LIKE_CURRENT_CARD_SUCCESS.type]: (state) => {},
  [LIKE_CURRENT_CARD_FAILURE.type]: (state) => {
    state.error = true
  },
  [LIKE_CURRENT_CARD_REQUEST.type]: (state, { payload }) => {
    state.cards[state.currentIndex].offscreen = true
  }
})

export default fetchImageResponse
