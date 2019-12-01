// @flow

import * as React from "react";

type SettingsContextProviderProps = {
  children: React.Node
};

type SettingsContextProviderState = {
  theme: "light" | "dark",
  mode: "human" | "ai",
  player: "cross" | "circle"
};

type SettingsContextValue = SettingsContextProviderState & {
  changeSettings: (key: string, newValue: string) => void
};

export const SettingsContext = React.createContext<SettingsContextValue>({});

class SettingsContextProvider extends React.PureComponent<
  SettingsContextProviderProps,
  SettingsContextProviderState
> {
  state = {
    theme: "light",
    mode: "human",
    player: "cross"
  };

  changeSettings = (key: string, newValue: string) => {
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
