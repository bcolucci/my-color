
import * as Actions from './actions'

const computePlay = (turnGenerator) =>  (previousState, playedColor) => {
  const state = {
    frame: previousState.frame + 1,
    turn: previousState.turn,
    played: playedColor
  }
  if (playedColor !== previousState.turn.text)
    state.end = 'badColor'
  else
    state.turn = turnGenerator()
  return state
}

const computeTimerEnd = (previousState, playedColor) => {
  return {
    frame: previousState.frame + 1,
    turn: previousState.turn,
    played: playedColor,
    end: 'timerEnd'
  }
}

export default (turnGenerator) => (previousState, action) => {
  previousState = previousState || { frame: 0, turn: turnGenerator() }
  if (action.type === Actions.PLAY)
    return computePlay(turnGenerator)(previousState, action.color)
  else if (action.type === Actions.TIMER_END)
    return computeTimerEnd(previousState, action.color)
  return previousState
}
