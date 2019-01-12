import React, { createContext, Component } from 'react';

export const { Consumer, Provider } = createContext('game')

const defaultBox = { 
  1: null, 2: null, 3: null, 
  4: null, 5: null, 6: null, 
  7: null, 8: null, 9: null, 
}

class GameContext extends Component {
  state = {
    turn: 1,
    score: { 1: 0, 2: 0, },
    box: { ...defaultBox },
    isFinish: false
  }

  addTurn = () => { 
    this.setState(state => ({ turn: state.turn + 1 })) 
  }
  
  gameFinish = () => {
    this.setState({ isFinish: true })
  }

  updateBox = box => { 
    this.setState({ box }) 
  }
  
  resetGame = score => { 
    this.setState(
      { 
        turn: 1, 
        score, 
        box: { ...defaultBox },
        isFinish: false
      }
    )
  }

  render() { 
    return ( 
      <Provider value={{
          ...this.state, 
          addTurn: this.addTurn, 
          updateBox: this.updateBox, 
          resetGame: this.resetGame,
          gameFinish: this.gameFinish,
        }}
      >
        { this.props.children }
      </Provider>
    );
  }
}
 
export default GameContext;