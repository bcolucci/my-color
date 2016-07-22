
import React, { Component, PropTypes } from 'react'

class BestScoreLine extends Component {

  render() {
    const { score } = this.props
    return (
      <tr>
        <td>{score.pseudo}</td>
        <td>{score.frame}</td>
        <td>{score.score}pts</td>
        <td>{score.date}</td>
      </tr>
    )
  }

}

BestScoreLine.propTypes = {
  score: React.PropTypes.object
}

export default BestScoreLine
