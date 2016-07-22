
import React, { Component, PropTypes } from 'react'
import Footer from './Footer'

class Replay extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.finalScore()
      .then((res) => this.setState({ score: res.data }))
      .catch((err) => console.error(err))
  }

  render() {

    if (undefined === this.state.score)
      return <div/>

    const { frame } = this.props

    return (
      <div>
        <p>
          You loose after <strong>{frame}</strong> turns.
          You made <strong>{this.state.score}</strong>pts.
        </p>
        <form action="/replay">
          <p>If you want to add your score, please enter a pseudo:</p>
          <p>
            <input type="hidden" name="frame" value={frame}/>
            <input type="hidden" name="score" value={this.state.score}/>
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
  finalScore: React.PropTypes.func
}

export default Replay
