
import { createStore, applyMiddleware } from 'redux'
import randomTurn from './random-turn'
import reducer from './reducer'

export default (preloadedState) => createStore(reducer(randomTurn), preloadedState)
