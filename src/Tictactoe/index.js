import React, { PureComponent } from "react";

import Score from "./Score";
import Board from "./Board";
import Interact from "./Interact";

import { SettingsContext } from "../context/settings-context";
import { GameContext } from "../context/game-context";
import { SizeContext } from "../context/size-context";

import "../css/Tictactoe/index.css";

export default class Tictactoe extends PureComponent {
  render() {
    return (
      <SettingsContext.Consumer>
        {settings => (
          <section className={`game ${settings.theme}`}>
            <Score />
            <GameContext.Consumer>
              {game => (
                <>
                  <SizeContext.Consumer>
                    {size => (
                      <Board {...game} {...size} player={settings.player} />
                    )}
                  </SizeContext.Consumer>
                  <Interact {...settings} resetGame={game.resetGame} />
                </>
              )}
            </GameContext.Consumer>
          </section>
        )}
      </SettingsContext.Consumer>
    );
  }
}
