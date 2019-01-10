import React, { Component } from 'react'

import Score from './Score'
import Board from './Board'
import Interact from './Interact'

import { Consumer as SettingsConsumer } from '../context/settings-context'
import { Consumer as GameConsumer } from '../context/game-context'

import './css/Tictactoe.css'

export default class Tictactoe extends Component {
  render(){
    return (
      <SettingsConsumer>
        {(settings) => (
          <section className={`game ${settings.theme}`}>
            <GameConsumer>
              {(value) => (
                <>
                  <Score {...value.score} />
                  <Board {...value} />
                </>
              )}
            </GameConsumer>
            <Interact {...settings} />
          </section>
        )}
      </SettingsConsumer>
    )
  }
}