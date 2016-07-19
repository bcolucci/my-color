
export default (turnGenerator) => (previousState, action) => {
  switch (action.type) {
    case '@@redux/INIT':
      return { frame: 0, turn: turnGenerator() }
    case 'play':
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
}
