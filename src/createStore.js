
import { createStore } from 'redux'
import reducer from './reducer'

export default (turnGenerator) => {
  const baseReducer = reducer(turnGenerator)
  return createStore(baseReducer)
}
