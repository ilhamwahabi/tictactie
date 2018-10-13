import React, { Component, Fragment } from 'react'
import swal from 'sweetalert2'

import './css/Interact.css'

class Interact extends Component {
  openAboutSwal = () => {
    swal({
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Tic-tac-toe.png',
      imageWidth: 200,
      imageHeight: 200,
      title: 'Tic Tac Boom!',
      text: 'Copyright 2018 Ilham Wahabi',
      confirmButtonText: 'Cool',
      footer: `
        <a class="see-github" href="https://github.com/IlhamWahabiGX/tictac-boom">
          See this project on &nbsp;<ion-icon name="logo-github"></ion-icon>
        </a>
      `
    })
  }

  render() {
    return (
      <Fragment>
        <div className="settings-button">
          <i className="material-icons md-48 button-icon">settings</i>
        </div>      
        <div className="about-button" onClick={this.openAboutSwal}>
          <i className="material-icons md-48 button-icon">face</i>
        </div>      
      </Fragment>
    )
  }
}

export default Interact