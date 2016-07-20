
import { createStore, applyMiddleware } from 'redux'
import randomTurn from './random-turn'
import reducer from './reducer'

export default (state) => {
  const rootReducer = reducer(randomTurn)
  const store = createStore(rootReducer, state)
  if (module.hot)
    module.hot.accept('./reducer', () => store.replaceReducer(require('./reducer').default))
  return store
}
