
import React, { Component, PropTypes } from 'react'
import axios from 'axios'

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

    return (
      <div id="best-scores">
        <p>Top 5 scores:</p>
        <table>
          <thead>
            <tr>
              <th>Pseudo</th>
              <th>Nb Turns</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {this.state.bestScores.map((score, i) => (
              <tr key={`bs-${i}`}>
                <td>{score.pseudo}</td>
                <td>{score.frame}</td>
                <td>{score.score}pts</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

}

BestScores.propTypes = {}

export default BestScores
