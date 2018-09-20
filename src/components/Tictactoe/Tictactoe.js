import React, { Component } from 'react'

import './Tictactoe.css'

export default class Tictactoe extends Component {
  render(){
    return (
      <section className="game">
        <svg>
          <line x1="5" y1="167" x2="497" y2="167"></line>
          <line x1="5" y1="334" x2="497" y2="334"></line>
          <line x1="167" y1="5" x2="167" y2="497"></line>
          <line x1="334" y1="5" x2="334" y2="497"></line>
          
          <ellipse cx="250" cy="250" rx="55" ry="55"></ellipse>
          <path d="M 30 30 L 137 137"></path>
          <path d="M 30 137 L 137 30"></path>
        </svg>
      </section>
    )
  }
}

// <defs>
//   <symbol id="hline">
//     
//   </symbol>
//   <symbol id="vline"></symbol>
//   <symbol id="cross"></symbol>
//   <symbol id="circle"></symbol>
// </defs>

// <use href="hline" x="100" y="100" width="100" height="100"></use>