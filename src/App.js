import React from 'react'

import ThemeContext from './context/settings-context'
import GameContext from './context/game-context'
import SizeContext from './context/size-context'

import Tictactoe from './components/Tictactoe'


const Home = () => (
  <main className="home">
    <ThemeContext>
      <GameContext>
        <SizeContext>
          <Tictactoe />
        </SizeContext>
      </GameContext>
    </ThemeContext>
  </main>
)

export default Home