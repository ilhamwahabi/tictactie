import React from "react";

export const GameContext = React.createContext({});

const defaultBox = Array.from({ length: 9 }).reduce(
  (acc, _, index) => ({ ...acc, [index]: null }),
  {}
);

class GameContextProvider extends React.PureComponent {
  state = {
    turn: 1,
    score: { "1": 0, "2": 0 },
    board: { ...defaultBox },
    isFinish: false,
  };

  addTurn = () => {
    this.setState((state) => ({ turn: state.turn + 1 }));
  };

  gameFinish = () => {
    this.setState({ isFinish: true });
  };

  updateBoard = (board) => {
    this.setState({ board });
  };

  resetGame = (score) => {
    this.setState({
      turn: 1,
      score,
      board: { ...defaultBox },
      isFinish: false,
    });
  };

  render() {
    return (
      <GameContext.Provider
        value={{
          ...this.state,
          addTurn: this.addTurn,
          updateBoard: this.updateBoard,
          resetGame: this.resetGame,
          gameFinish: this.gameFinish,
        }}
      >
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export default GameContextProvider;
