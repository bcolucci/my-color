
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import ColorButton from './ColorButton'
import colors from '../colors'

class MyColor extends Component {

  constructor(props) {
    super(props)
    this.turns = []
  }

  onPlay(color) {
    this.props.play(color)
  }

  createButtons() {
    return colors.map(c => {
      const clickNotifier = this.onPlay.bind(this, c)
      return <ColorButton key={`btn-${c}`} color={c} clickNotifier={clickNotifier}/>
    }, this)
  }

  answer() {
    const { frame, end } = this.props
    if (frame === 0)
      return 'Take your chance!'
    if (end) {
      this.props.save(this.turns)
      return 'You loose :('
    }
    return 'Good, continue!'
  }

  render() {
    const { color, text } = this.props.turn
    this.turns.push([ color, text ])
    return (
      <div>
        <div id="text" className={classNames(`color-${color}`)}>{text}</div>
        <div id="answer">{this.answer()}</div>
        <div id="buttons">{this.createButtons()}</div>
      </div>
    )
  }

}

MyColor.propTypes = {}

export default MyColor
