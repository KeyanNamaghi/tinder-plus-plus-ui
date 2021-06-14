import { combineReducers } from 'redux'
import demo from './demo'
import test from './test'

const allReducers = combineReducers({ demo, test })

export default allReducers
