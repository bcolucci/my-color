
import _ from 'lodash'
import * as Actions from './actions'

const incScore = previousScore => previousScore === 0 ? 1
  : Math.floor(previousScore + Math.sqrt(previousScore))

const MIN_TIME = 800;
const MAX_TIME = 2500;

const initialState = (turnGenerator) => {
  return {
    frame: 0,
    score: 0,
    time: MAX_TIME,
    turn: turnGenerator()
  }
}

export default (turnGenerator) => (previousState = initialState(turnGenerator), action) => {
  if (Actions.ACTIONS.indexOf(action.type) > -1) {
    let state = {
      frame: previousState.frame,
      score: previousState.score,
      turn: previousState.turn
    }
    if (action.type === Actions.PLAY) {
      let m = {
        frame: previousState.frame + 1,
        playedColor: action.color
      }
      if (m.playedColor !== state.turn.text)
        m.end = 'badColor'
      else
        m = _.merge(m, {
          score: incScore(previousState.score),
          time: Math.max(MIN_TIME, MAX_TIME - previousState.score),
          turn: turnGenerator()
        })
      state = _.merge(state, m)
    } else if (action.type === Actions.TIMER_END)
      state = _.merge(state, { end: 'timerEnd' })
    //console.log(JSON.stringify(state))
    return state
  }
  return previousState
}
