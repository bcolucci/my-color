
import React, { Component, PropTypes } from 'react'
import axios from 'axios'
import BestScoreLine from './BestScoreLine'

class BestScores extends Component {

  constructor(props) {
    super(props)
    this.state = { loaded: false }
  }

  componentDidMount() {
    axios.get('/scores')
      .then((res) => {
        this.setState({ loaded: true, bestScores: res.data })
      }).catch((err) => console.error(err))
  }

  render() {

    if (!this.state.loaded)
      return <div/>;

    const rows = this.state.bestScores.map((score, i) => <BestScoreLine key={`bs-${i}`} score={score}/>)

    return (
      <div id="best-scores">
        <p>Top 5 scores:</p>
        <table>
          <thead>
            <tr>
              <th>Pseudo</th>
              <th>Nb Turns</th>
              <th>Score</th>
              <th>The</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }

}

BestScores.propTypes = {}

export default BestScores
