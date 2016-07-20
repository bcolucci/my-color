
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

class ColorButton extends Component {

  render() {
    const { color, clickNotifier } = this.props
    return <button className={classNames('btn', `btn-${color}`)} onClick={clickNotifier}>{color}</button>
  }

}

ColorButton.propTypes = {
  clickNotifier: React.PropTypes.func,
  color: React.PropTypes.string
}

export default ColorButton
