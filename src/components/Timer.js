
import React, { Component, PropTypes } from 'react'

const TICK_INTERVAL = 10

class Timer extends Component {

  constructor(props) {
    super(props)
    this.state = { remaining: this.props.remaining() }
  }

  reset() {
    this.setState({ remaining: this.props.remaining() })
  }

  startTimer() {
    this.timer = setInterval(this.tick.bind(this), TICK_INTERVAL);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.startTimer()

    const resetCallback = this.reset.bind(this)
    this.props.resetCallback(() => resetCallback)
  }

  componentWillUnmount() {
    this.stopTimer()
  }

  tick() {
    const remaining = this.state.remaining - TICK_INTERVAL
    this.setState({ remaining: remaining })
    if (remaining <= 0) {
      this.stopTimer()
      this.props.endNotifier()
    }
  }

  render() {
    const pct = Math.floor(this.state.remaining * 100 / this.props.remaining())
    return (
      <div id="timer">
        <div className="value">{this.state.remaining}ms</div>
        <div className="meter">
          <span style={{ width:`${pct}%` }}></span>
        </div>
      </div>
    )
  }

}

Timer.propTypes = {
  remaining: React.PropTypes.func,
  resetCallback: React.PropTypes.func,
  endNotifier: React.PropTypes.func
}

export default Timer
