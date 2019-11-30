import React, { createContext, Component } from "react";

export const SettingsContext = createContext();

class SettingsContextProvider extends Component {
  state = {
    theme: "light",
    mode: "human",
    player: "cross"
  };

  changeSettings = (key, newValue) => {
    this.setState({ [key]: newValue });

    localStorage.setItem("tictacboomSettings", JSON.stringify(this.state));
  };

  componentDidMount() {
    const storedSettings = JSON.parse(
      localStorage.getItem("tictacboomSettings")
    );

    if (storedSettings) this.setState({ ...storedSettings });
  }

  render() {
    return (
      <SettingsContext.Provider
        value={{ ...this.state, changeSettings: this.changeSettings }}
      >
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default SettingsContextProvider;
