import React, { Component, Fragment } from 'react'
import swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ReactTooltip from 'react-tooltip'

import './css/Interact.css'

const MySwal = withReactContent(swal)

class Interact extends Component {
  openAboutSwal = () => {
    MySwal.fire({
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Tic-tac-toe.png',
      imageWidth: 200,
      imageHeight: 200,
      title: 'Tic Tac Boom!',
      text: 'Copyright 2018 Ilham Wahabi',
      confirmButtonText: 'Cool',
      footer: (
        <a 
          class="see-github" rel="noopener noreferrer"
          href="https://github.com/IlhamWahabiGX/tictac-boom" target="_blank"
        >
          See this project on &nbsp;<ion-icon name="logo-github"></ion-icon>
        </a>
      ),
    })
  }

  openSettingsSwal = () => {
    const { mode, player, theme, changeSettings } = this.props;

    MySwal.fire({
      title: 'Game Settings',
      html: (
        <Fragment>
          <div className="options-items">
            <div className={`options-item ${mode === 'human' && 'active'}`}>
              <ion-icon name="contacts"></ion-icon> Human
            </div>
            <div className={`options-item ${mode === 'ai' && 'active'}`}>
              <ion-icon name="desktop"></ion-icon> AI
            </div>
          </div>
          <div className="options-items">
            <div className={`options-item ${player === 'cross' && 'active'}`}>
              <ion-icon name="close"></ion-icon> Cross
            </div>
            <div className={`options-item ${mode === 'circle' && 'active'}`}>
              <ion-icon name="radio-button-off"></ion-icon> Circle
            </div>
          </div>
          <div className="options-items">
            <div className={`options-item ${theme === 'light' && 'active'}`}>
              <ion-icon name="sunny"></ion-icon> Light
            </div>
            <div className={`options-item ${theme === 'dark' && 'active'}`}>
              <ion-icon name="moon"></ion-icon> Dark
            </div>
          </div>
        </Fragment>
      ),
      confirmButtonText: 'Save',
      showCancelButton: true,
      cancelButtonText: 'Cancel'
    })
    .then((result) => {
      console.log(result)
    })
  }

  render() {
    return (
      <Fragment>
        <div data-tip data-for='settings' className="settings-button" onClick={this.openSettingsSwal}>
          <ion-icon name="settings" class="md-48 button-icon"></ion-icon>
        </div>
        <div data-tip data-for='about' className="about-button" onClick={this.openAboutSwal}>
          <ion-icon name="happy" class="md-48 button-icon"></ion-icon>
        </div>

        <ReactTooltip id='settings' place="right" type='dark' effect="solid">Settings</ReactTooltip>
        <ReactTooltip id='about' place="left" type='dark' effect="solid">About</ReactTooltip>
      </Fragment>
    )
  }
}

export default Interact