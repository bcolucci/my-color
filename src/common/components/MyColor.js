
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import ColorButton from './ColorButton'

class MyColor extends Component {

  onPlay(color) {
    console.log('play', color)
    this.props.play(color)
  }

  render() {

    const { color, text, choices } = this.props.turn

    const buttons = choices.map(c => {
      const clickNotifier = this.onPlay.bind(this, c)
      return <ColorButton key={`btn-${c}`} color={c} clickNotifier={clickNotifier}/>
    }, this)

    return (
      <div>
        <div id="text" className={classNames(`color-${color}`)}>{text}</div>
        <div id="buttons">{buttons}</div>
      </div>
    )
  }

}

MyColor.propTypes = {}

export default MyColor
