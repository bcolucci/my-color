
import { combineReducers } from 'redux'
import myColor from './mycolor'

export default (turnGenerator) => combineReducers({
  myColor: myColor(turnGenerator)
})
