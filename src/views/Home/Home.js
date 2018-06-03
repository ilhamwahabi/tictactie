import React from 'react'

import Intro from '../../components/Intro/Intro'
import Difficulty from '../../components/Difficulty/Difficulty'
import Tictactoe from '../../components/Tictactoe/Tictactoe'

import './Home.css'

export default class Home extends React.Component {
  render(){
    return (
      <main className="home">
        <Intro />
        <Difficulty />
      </main>
    )
  }
}