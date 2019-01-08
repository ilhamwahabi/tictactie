import React, { Component, Fragment } from 'react'

import './css/Score.css'

class Score extends Component {
  render() {
    return (
      <Fragment>
        <div className="score-board left-score">
          <p>{ this.props[1] }</p>
        </div>
        <div className="score-board right-score">
          <p>{ this.props[2] }</p>
        </div>
      </Fragment>
    )
  }
}

export default Score