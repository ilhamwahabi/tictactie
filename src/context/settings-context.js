import React from "react";

export const SettingsContext = React.createContext({});

class SettingsContextProvider extends React.PureComponent {
  state = {
    theme: "light",
    player: "cross",
  };

  changeSettings = (key, newValue) => {
    this.setState({ [key]: newValue });
    localStorage.setItem("tictacboom:settings", JSON.stringify(this.state));
  };

  componentDidMount() {
    const storedSettings = localStorage.getItem("tictacboom:settings");
    if (storedSettings) this.setState({ ...JSON.parse(storedSettings) });
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
