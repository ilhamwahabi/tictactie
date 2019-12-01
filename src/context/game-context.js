// @flow

import * as React from "react";

type Score = { [key: string]: number };
type Board = { [key: string]: null | React.Node };

type GameContextProviderProps = {
  children: React.Node
};

type GameContextProviderState = {
  turn: number,
  score: Score,
  board: Board,
  isFinish: boolean
};

type GameContextValue = GameContextProviderState & {
  addTurn: () => void,
  updateBoard: (board: Board) => void,
  resetGame: (score: Score) => void,
  gameFinish: () => void
};

export const GameContext = React.createContext<GameContextValue>({});

const defaultBox = Array.from({ length: 9 }).reduce(
  (acc, _, index) => ({ ...acc, [index]: null }),
  {}
);

class GameContextProvider extends React.PureComponent<
  GameContextProviderProps,
  GameContextProviderState
> {
  state = {
    turn: 1,
    score: { "1": 0, "2": 0 },
    board: { ...defaultBox },
    isFinish: false
  };

  addTurn = () => {
    this.setState(state => ({ turn: state.turn + 1 }));
  };

  gameFinish = () => {
    this.setState({ isFinish: true });
  };

  updateBoard = (board: Board) => {
    this.setState({ board });
  };

  resetGame = (score: Score) => {
    this.setState({
      turn: 1,
      score,
      board: { ...defaultBox },
      isFinish: false
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
          gameFinish: this.gameFinish
        }}
      >
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export default GameContextProvider;
