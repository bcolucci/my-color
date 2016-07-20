
import { createStore, applyMiddleware } from 'redux'
import randomTurn from './random-turn'
import reducer from './reducer'

export default (preloadedState) => {
  const rootReducer = reducer(randomTurn)
  const store = createStore(rootReducer, preloadedState)
  if (module.hot)
    module.hot.accept('./reducer', () => store.replaceReducer(require('./reducer').default))
  return store
}
