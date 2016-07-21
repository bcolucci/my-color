
import React, { Component, PropTypes } from 'react'

class Replay extends Component {

  render() {
    const { frame, score } = this.props
    return (
      <div id="loose">
        <p>You loose after {frame} turns. You made {score} pts</p>
        <button onClick={() => window.location.reload()}>Play again</button>
      </div>
    )
  }

}

Replay.propTypes = {
  frame: React.PropTypes.number,
  score: React.PropTypes.number
}

export default Replay
