
import React, { Component, PropTypes } from 'react'
import BestScores from './BestScores'

const GITHUB = 'https://github.com/bcolucci/my-color'

class Footer extends Component {

  render() {
    return (
      <div id="footer">
        <BestScores/>
        <p><a href="https://github.com/bcolucci/my-color" target="_blank">{GITHUB}</a></p>
      </div>
    )
  }

}

Footer.propTypes = {}

export default Footer
