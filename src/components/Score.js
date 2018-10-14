import React, { Component, Fragment } from 'react'

import './css/Score.css'

class Score extends Component {
  render() {
    return (
      <Fragment>
        <div className="score-board left-score">
          <ion-icon name="close"></ion-icon>
          <p>: { this.props[1] }</p>
        </div>
        <div className="score-board right-score">
          <p>{ this.props[2] } :</p>
          <ion-icon name="radio-button-off"></ion-icon>
        </div>
      </Fragment>
    )
  }
}

export default Score