
import _ from 'lodash'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import createStore from './createStore'
import colors from './colors'
import actions from './actions'
import randomTurn from './random-turn'
import Hello from './components/hello'

// hard-coded run to see results (random user answers)
/*(() => {

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

})();*/

console.log(ReactDOMServer.renderToString(<Hello/>));
