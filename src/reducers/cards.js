import { createReducer } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { analytics } from '../firebase'
import {
  LIKE_CURRENT_CARD_REQUEST,
  LIKE_CURRENT_CARD_SUCCESS,
  LIKE_CURRENT_CARD_FAILURE,
  PASS_CURRENT_CARD_REQUEST
} from '../actions'

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
  { ...cardState, index: 3, offscreen: true }
]

const messages = [
  'What is actually wrong with you?',
  'That must have been a misclick',
  'Who hurt you?',
  'I bet you are fun at parties',
  'Really?'
]

const initialState = { cards: initialArray, error: null, currentIndex: 0 }

const fetchImageResponse = createReducer(initialState, {
  [LIKE_CURRENT_CARD_SUCCESS.type]: (state) => {},
  [LIKE_CURRENT_CARD_FAILURE.type]: (state) => {
    state.error = true
    analytics.logEvent('like failure')
  },
  [LIKE_CURRENT_CARD_REQUEST.type]: (state) => {
    state.cards[state.currentIndex].offscreen = true
    state.currentIndex = (state.currentIndex + 1) % 4
    state.cards[(state.currentIndex + 2) % 4].offscreen = false
    analytics.logEvent('like')
  },
  [PASS_CURRENT_CARD_REQUEST.type]: (state) => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    toast.error(<div className="Toast-error">{message}</div>)
    analytics.logEvent('pass', { method: 'button' })
  }
})

export default fetchImageResponse
