import { createReducer } from '@reduxjs/toolkit'
import { toggleDemo } from '../actions'

const devToolsReducer = createReducer(false, {
  [toggleDemo.type]: (state) => !state
})

export default devToolsReducer
