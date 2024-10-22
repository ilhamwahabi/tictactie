import React, { PureComponent, Fragment, createRef } from "react";
import swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Tooltip } from "react-tooltip";
import {
  IoLogoGithub,
  IoMdHappy,
  IoMdSettings,
  IoMdMoon,
  IoMdSunny,
  IoMdRadioButtonOff,
  IoMdClose,
} from "react-icons/io";

import "../css/Tictactoe/Interact.css";

const Alert = withReactContent(swal);

class Interact extends PureComponent {
  player = createRef();
  theme = createRef();

  openAboutSwal = () => {
    Alert.fire({
      imageUrl: require("../image/logo.png"),
      imageWidth: 200,
      imageHeight: 200,
      title: "Tic-Tac-Tie",
      text: `Copyright 2018 Ilham Wahabi`,
      confirmButtonText: "Cool!",
      confirmButtonColor: this.props.theme === "light" ? "#2196f3" : "#263238",
      footer: (
        <a
          className={`see-github link-${
            this.props.theme === "light" ? "light" : "dark"
          }`}
          rel="noopener noreferrer"
          href="https://github.com/ilhamwahabi/tictactie"
          target="_blank"
        >
          See this project on &nbsp; <IoLogoGithub />
        </a>
      ),
    });
  };

  toggleActiveClass = (ref) => {
    for (let button of [...this[ref].current.childNodes]) {
      button.classList.toggle("active");
    }
  };

  openSettingsSwal = () => {
    let settings = { ...this.props };

    const onSettingsClicked = (key, value) => {
      if (settings[key] !== value) this.toggleActiveClass(key);
      settings[key] = value;
    };

    Alert.fire({
      title: "Game Settings",
      html: (
        <Fragment>
          <div
            className={`options-items item-${
              settings.theme === "light" ? "light" : "dark"
            }`}
            ref={this.player}
          >
            <div
              onClick={onSettingsClicked.bind(this, "player", "cross")}
              className={`options-item ${
                settings.player === "cross" ? "active" : ""
              }`}
            >
              <IoMdClose className="option-icon" /> Cross
            </div>
            <div
              onClick={onSettingsClicked.bind(this, "player", "circle")}
              className={`options-item ${
                settings.player === "circle" ? "active" : ""
              }`}
            >
              <IoMdRadioButtonOff className="option-icon" /> Circle
            </div>
          </div>

          <div
            className={`options-items item-${
              settings.theme === "light" ? "light" : "dark"
            }`}
            ref={this.theme}
          >
            <div
              onClick={onSettingsClicked.bind(this, "theme", "light")}
              className={`options-item ${
                settings.theme === "light" ? "active" : ""
              }`}
            >
              <IoMdSunny className="option-icon" /> Light
            </div>
            <div
              onClick={onSettingsClicked.bind(this, "theme", "dark")}
              className={`options-item ${
                settings.theme === "dark" ? "active" : ""
              }`}
            >
              <IoMdMoon className="option-icon" /> Dark
            </div>
          </div>
        </Fragment>
      ),
      confirmButtonText: "Save",
      confirmButtonColor: this.props.theme === "light" ? "#2196f3" : "#263238",
      showCancelButton: true,
      cancelButtonText: "Cancel",
    }).then(({ value }) => {
      if (!value) return;

      this.props.changeSettings("mode", settings.mode);
      this.props.changeSettings("theme", settings.theme);

      if (this.props.player !== settings.player)
        this.props.resetGame({ firstPlayer: 0, secondPlayer: 0 });
      this.props.changeSettings("player", settings.player);
    });
  };

  render() {
    return (
      <Fragment>
        <div
          className="settings-button"
          onClick={this.openSettingsSwal}
          data-tooltip-id="interact"
          data-tooltip-content="Settings"
          data-tooltip-place="left"
        >
          <IoMdSettings className="button-icon" />
        </div>
        <div
          className="about-button"
          onClick={this.openAboutSwal}
          data-tooltip-id="interact"
          data-tooltip-content="About"
          data-tooltip-place="right"
        >
          <IoMdHappy className="button-icon" />
        </div>
        <Tooltip id="interact" />
      </Fragment>
    );
  }
}

export default Interact;
