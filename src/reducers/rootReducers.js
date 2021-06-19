import { combineReducers } from 'redux'
import image from './image'
import stockImages from './stockImages'
const allReducers = combineReducers({ image, stockImages })

export default allReducers
