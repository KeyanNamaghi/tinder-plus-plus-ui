import { createReducer } from '@reduxjs/toolkit'
import { fetchSuccess } from '../actions'

const devToolsReducer = createReducer(
  { user: '' },
  {
    [fetchSuccess.type]: (state, { payload }) => {
      state.user = payload
    }
  }
)

export default devToolsReducer
