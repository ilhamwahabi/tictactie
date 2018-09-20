import React from 'react'

import Tictactoe from './components/Tictactoe/Tictactoe'

export default class Home extends React.Component {
  render(){
    return (
      <main className="home">
        <Tictactoe />
      </main>
    )
  }
}