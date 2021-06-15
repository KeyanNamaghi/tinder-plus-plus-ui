import { combineReducers } from 'redux'
import demo from './demo'
import test from './test'
import image from './image'

const allReducers = combineReducers({ demo, test, image })

export default allReducers
