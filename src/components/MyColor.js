
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import axios from 'axios'
import Timer from './Timer'
import ColorButton from './ColorButton'
import Footer from './Footer'
import Replay from './Replay'

class MyColor extends Component {

  constructor(props) {
    super(props)
    this.turns = []
  }

  saveTurns(end) {
    this.turns.pop()
    axios.post(`/save`, {
      end: end,
      score: this.props.score,
      turns: this.turns
    }).catch((err) => console.error(err))
  }

  resetCallback(callbackRetriever) {
    this.resetTimer = callbackRetriever()
  }

  play(color) {
    this.resetTimer()
    this.props.play(color)
  }

  createButtons() {
    return this.props.turn.choices.map((color) => {
      return <ColorButton key={`btn-${color}`} color={color} clickNotifier={() => this.play(color)}/>
    }, this)
  }

  render() {

    const buttons = this.createButtons()

    const { frame, end, turn, time } = this.props

    const remainingTime = (() => this.props.time).bind(this)
    const resetCallback = this.resetCallback.bind(this)
    const onTimerEnd = this.props.timerEnd.bind(this)

    if (end) {
      this.saveTurns(end)
      return <Replay frame={this.props.frame} score={this.props.score}/>
    }

    this.turns.push([ turn.text, turn.color ])

    return (
      <div>
        <div id="text" className={classNames(`color-${turn.color}`)}>{turn.text}</div>
        <div id="answer">
          <span>Trun <strong>{frame}</strong> | {frame === 0 ? 'Take your chance!' : 'Good, continue!'}</span>
          <div id="score" className="badge">{this.props.score}pts</div>
        </div>
        <Timer remaining={remainingTime} resetCallback={resetCallback} endNotifier={onTimerEnd}/>
        <div id="buttons">{buttons}</div>
        <Footer/>
      </div>
    )
  }

}

MyColor.propTypes = {}

export default MyColor
