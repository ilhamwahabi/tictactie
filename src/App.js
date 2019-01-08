import React from 'react'

import { ThemeContext } from './context/theme-context'
import Tictactoe from './components/Tictactoe'


const Home = () => (
  <main className="home">
    <ThemeContext.Provider value="light">
      <Tictactoe />    
    </ThemeContext.Provider>
  </main>
)

export default Home