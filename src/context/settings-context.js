import React, { createContext, Component } from 'react'

export const { Consumer, Provider } = createContext()

class ThemeContext extends Component {
  state = {
    theme: 'light',
    mode: 'human',
    player: 'cross',
  }

  changeSettings = (type) => {
    let newValue;
    switch (type) {
      case 'theme':
        newValue = this.state.theme === 'light' ? 'dark' : 'light'
        break;
      case 'theme':
        newValue = this.state.theme === 'human' ? 'ai' : 'human'
        break;
      case 'theme':
        newValue = this.state.theme === 'cross' ? 'circle' : 'cross'
        break;
    }

    this.setState({ [type]: newValue })
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