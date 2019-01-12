import React, { Component, createContext } from 'react';

export const { Provider, Consumer } = createContext()

class SizeContext extends Component {
  state = {
    linePoint: {
      alpha: 5,
      beta: 167,
      gama: 334,
      omega: 497,
    }
  }

  setLinePoint = () => {
    const wide = { alpha: 5, beta: 167, gama: 334, omega: 497, }
    const medium = { alpha: 3, beta: 124, gama: 248, omega: 362, }
    const small = { alpha: 2, beta: 82, gama: 164, omega: 241, }

    let newLinePoint
    if (window.innerWidth < 481) newLinePoint = small
    else if (window.innerWidth < 768) newLinePoint = medium
    else newLinePoint = wide

    this.setState({ linePoint: { ...newLinePoint } })
  }

  componentDidMount() {
    window.addEventListener('resize', this.setLinePoint)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setLinePoint)
  }

  render() {
    return (
      <Provider value={{ ...this.state }}>
        { this.props.children }    
      </Provider>
    )
  }
}

export default SizeContext