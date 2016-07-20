
import React, { Component, PropTypes } from 'react'

class Timer extends Component {

  constructor(props) {
    super(props)
    this.state = { remaining: this.props.nbTicks }
  }

  componentDidMount() {
    this.timer = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ remaining: this.state.remaining - 1 });
  }

  render() {
    return <div id="timer">{this.state.remaining}s</div>
  }

}

Timer.propTypes = {
  nbTicks: React.PropTypes.number
}

export default Timer
