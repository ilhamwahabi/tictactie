import React from "react";

import SettingsContext from "./context/settings-context";
import GameContext from "./context/game-context";
import SizeContext from "./context/size-context";

import Tictactoe from "./Tictactoe";

const Home = () => (
  <main className="home">
    <SettingsContext>
      <GameContext>
        <SizeContext>
          <Tictactoe />
        </SizeContext>
      </GameContext>
    </SettingsContext>
  </main>
);

export default Home;
