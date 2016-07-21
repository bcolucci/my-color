
import React, { Component, PropTypes } from 'react'

class Replay extends Component {

  render() {
    return (
      <div id="loose">
        <p>You loose :(</p>
        <button onClick={() => window.location.reload()}>Play again</button>
      </div>
    )
  }

}

Replay.propTypes = {}

export default Replay
