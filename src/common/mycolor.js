
export default (turnGenerator) => (previousState, action) => {
  previousState = previousState || { frame: 0, turn: turnGenerator() }
  if (action.type === 'play') {
    const state = {
      frame: previousState.frame + 1,
      turn: previousState.turn,
      played: action.color,
      end: action.color !== previousState.turn.text
    }
    if (!state.end)
      state.turn = turnGenerator()
    return state;
  }
  return previousState
}
