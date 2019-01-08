import React from 'react'

import { Provider, settings } from './context/settings-context'
import Tictactoe from './components/Tictactoe'


const Home = () => (
  <main className="home">
    <Provider value={settings}>
      <Tictactoe />
    </Provider>
  </main>
)

export default Home