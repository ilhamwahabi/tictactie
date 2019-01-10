import React from 'react'

import ThemeContext from './context/settings-context'
import GameContext from './context/game-context'

import Tictactoe from './components/Tictactoe'


const Home = () => (
  <main className="home">
    <ThemeContext>
      <GameContext>
        <Tictactoe />
      </GameContext>
    </ThemeContext>
  </main>
)

export default Home