import React, { Component, createContext } from 'react';

export const { Provider, Consumer } = createContext()

class SizeContext extends Component {
  state = {
    linePoint: {},
    pawnPoint: {}
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

  setPawnPoint = () => {
    const wide = { alpha: 83, beta: 30, gama: 250, omega: 197, teta: 417, delta: 364, }
    const medium = { alpha: 60, beta: 22.5, gama: 185.5, omega: 150, teta: 308, delta: 271.5, }
    const small = { alpha: 38.5, beta: 15, gama: 122.5, omega: 97, teta: 204.5, delta: 179, }

    let newPawnPoint
    if (window.innerWidth < 481) newPawnPoint = small
    else if (window.innerWidth < 768) newPawnPoint = medium
    else newPawnPoint = wide

    this.setState({ pawnPoint: { ...newPawnPoint } })
  }

  componentWillMount() {
    this.setLinePoint()
    this.setPawnPoint()
  }

  componentDidMount() {
    window.addEventListener('resize', this.setLinePoint)
    window.addEventListener('resize', this.setPawnPoint)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setLinePoint)
    window.removeEventListener('resize', this.setPawnPoint)
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