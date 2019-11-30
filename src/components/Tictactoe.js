import React, { PureComponent } from "react";

import Score from "./Score";
import Board from "./Board";
import Interact from "./Interact";

import { Consumer as SettingsConsumer } from "../context/settings-context";
import { Consumer as GameConsumer } from "../context/game-context";
import { Consumer as SizeConsumer } from "../context/size-context";

import "./css/Tictactoe.css";

export default class Tictactoe extends PureComponent {
  render() {
    return (
      <SettingsConsumer>
        {settings => (
          <section className={`game ${settings.theme}`}>
            <GameConsumer>
              {game => (
                <>
                  <Score {...game.score} />
                  <SizeConsumer>
                    {size => (
                      <Board {...game} {...size} player={settings.player} />
                    )}
                  </SizeConsumer>
                  <Interact {...settings} resetGame={game.resetGame} />
                </>
              )}
            </GameConsumer>
          </section>
        )}
      </SettingsConsumer>
    );
  }
}
