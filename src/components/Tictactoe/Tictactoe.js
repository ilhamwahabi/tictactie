import React, { Component, Fragment } from 'react'

import './Tictactoe.css'

export default class Tictactoe extends Component {
  state = {
    turn: 1,
    isFinish: false,
    score: {
      1: 0,
      2: 0,
    },
    box: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
    }
  }

  putCircle = (loc) => {
    let centerSpot = { x: null, y: null };
    
    if (loc <= 3) {
      centerSpot.y = 83;
    } else if (loc <= 6) {
      centerSpot.y = 250;
    } else if (loc <= 9) {
      centerSpot.y = 417
    }

    if (loc % 3 === 1) {
      centerSpot.x = 83;
    } else if (loc % 3 === 2) {
      centerSpot.x = 250;
    } else if (loc % 3 === 0) {
      centerSpot.x = 417;
    }

    return <circle cx={centerSpot.x} cy={centerSpot.y} r="55" />
  }

  putCross = (loc) => {
    let topLeftSpot = { x: null, y: null };

    if (loc <= 3) {
      topLeftSpot.y = 30;
    } else if (loc <= 6) {
      topLeftSpot.y = 197;
    } else if (loc <= 9) {
      topLeftSpot.y = 364
    }

    if (loc % 3 === 1) {
      topLeftSpot.x = 30;
    } else if (loc % 3 === 2) {
      topLeftSpot.x = 197;
    } else if (loc % 3 === 0) {
      topLeftSpot.x = 364;
    }

    return <path d={`
      M${topLeftSpot.x} ${topLeftSpot.y} ${topLeftSpot.x + 107} ${topLeftSpot.y + 107} 
      M${topLeftSpot.x} ${topLeftSpot.y + 107} ${topLeftSpot.x + 107} ${topLeftSpot.y}
    `} />
  }

  onBoxClick = (i) => {
    this.setState(state => ({ turn: state.turn + 1 }));

    const box = { ...this.state.box }

    switch(this.state.turn % 2) {
      case (0): box[i] = this.putCircle(i); break;
      case (1): box[i] = this.putCross(i); break;
      default: break;
    }

    this.setState({ box })

    if (this.state.turn === 9 || this.isFinish) {
      setTimeout(() => {
        this.setState({ turn: 1, isFinish: false, box: {
          1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 
        }})
      }, 1000)
    }
  }

  renderBox = () => {
    const boxes = []
    for (let i = 1; i <= 9; i++) {
      boxes.push(<div key={i} onClick={() => this.onBoxClick(i)} className={`box box-${i}`}></div>)
    }
    return boxes;
  }

  renderSvgLine = () => ([
    <line key="1" x1="5" y1="167" x2="497" y2="167"></line>,
    <line key="2" x1="5" y1="334" x2="497" y2="334"></line>,
    <line key="3" x1="167" y1="5" x2="167" y2="497"></line>,
    <line key="4" x1="334" y1="5" x2="334" y2="497"></line>,
  ])

  renderMark = () => ( 
    Object.keys(this.state.box).map((el, i) => <Fragment key={i}>{ this.state.box[el] }</Fragment>)
  )

  render(){
    return (
      <section className="game">
        <svg>
          { this.renderSvgLine() }
          { this.renderMark() }          
        </svg>
        <div className="ttt">
          { this.renderBox() }
        </div>
      </section>
    )
  }
}