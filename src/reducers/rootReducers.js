import { combineReducers } from 'redux'
import image from './image'
import stockImages from './stockImages'
import cards from './cards'
const allReducers = combineReducers({ image, stockImages, cards })

export default allReducers
