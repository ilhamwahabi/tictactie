import React from 'react'

import ThemeContext from './context/settings-context'
import Tictactoe from './components/Tictactoe'


const Home = () => (
  <main className="home">
    <ThemeContext>
      <Tictactoe />
    </ThemeContext>
  </main>
)

export default Home