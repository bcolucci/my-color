
import _ from 'lodash'
import createStore from './createStore'
import colors from './colors'
import actions from './actions'
import randomTurn from './random-turn'

const store = createStore(randomTurn)

const states = [ store.getState() ]

let state;
do {
  const action = actions.play(_.sample(colors))
  store.dispatch(action)
  state = store.getState()
  states.push(state)
} while(!state.end);

console.log(JSON.stringify(states, null, 2))
