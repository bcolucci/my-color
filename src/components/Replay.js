
import React, { Component, PropTypes } from 'react'
import Footer from './Footer'

class Replay extends Component {

  render() {
    const { frame, score } = this.props
    return (
      <div>
        <p>
          You loose after <strong>{frame}</strong> turns.
          You made <strong>{score}</strong>pts.
        </p>
        <form action="/replay">
          <p>If you want to add your score, please enter a pseudo:</p>
          <p>
            <input type="hidden" name="frame" value={frame}/>
            <input type="hidden" name="score" value={score}/>
            <input type="text" name="pseudo" placeholder="iAmGroot"/>
          </p>
          <button type="submit">Save and replay</button>
        </form>
        <Footer/>
      </div>
    )
  }

}

Replay.propTypes = {
  frame: React.PropTypes.number,
  score: React.PropTypes.number
}

export default Replay
