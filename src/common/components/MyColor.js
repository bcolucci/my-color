
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

class MyColor extends Component {

  render() {
    const { color, text } = this.props.turn
    return (
      <div id="text" className={classNames(`color-${color}`)}>{text}</div>
    )
  }

}

MyColor.propTypes = {}

export default MyColor
