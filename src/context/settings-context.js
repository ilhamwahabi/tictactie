import React, { createContext, Component } from 'react'

export const { Consumer, Provider } = createContext()

class ThemeContext extends Component {
  state = {
    theme: 'light',
    mode: 'human',
    player: 'cross',
  }

  changeSettings = (key, newValue) => {
    this.setState({ [key] : newValue })
  }

  render() {
    return (
      <Provider value={{...this.state, changeSettings: this.changeSettings}}>
        { this.props.children }      
      </Provider>
    )
  }
}

export default ThemeContext