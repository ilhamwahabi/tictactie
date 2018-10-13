import React, { Component, Fragment } from 'react'

import './css/Interact.css'

class Interact extends Component {
  render() {
    return (
      <Fragment>
        <div className="settings-button">
          <i className="material-icons md-48 button-icon">settings</i>
        </div>      
        <div className="about-button">
          <i className="material-icons md-48 button-icon">face</i>
        </div>      
      </Fragment>
    )
  }
}

export default Interact