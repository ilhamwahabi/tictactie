import React, { Component, Fragment } from 'react'

import './Tictactoe.css'

export default class Tictactoe extends Component {
  state = {
    turn: 1,
    score: {
      1: 0, 2: 0,
    },
    box: {
      1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null,
    }
  }

  checkColumn = (loc) => {
    switch (loc % 3) {
      case (1): return 1;
      case (2): return 2;
      case (0): return 3;
      default: break;
    }
  }

  checkRow = (loc) => {
    switch (Math.ceil(loc / 3)) {
      case (1): return 1;
      case (2): return 2;
      case (3): return 3;
      default: break;
    }
  }

  mostLeftBox = (loc) => {
    if (this.checkColumn(loc) === 1) {
      return loc;
    } else {
      return this.mostLeftBox(loc - 1)
    }
  }

  mostTopBox = (loc) => {
    if (this.checkRow(loc) === 1) {
      return loc;
    } else {
      return this.mostTopBox(loc - 3)
    }
  }

  checkVertical = (box, mostTopBox) => {
    if (box[mostTopBox] && box[mostTopBox + 3] && box[mostTopBox + 6]) {
      return (box[mostTopBox].type === box[mostTopBox + 3].type) && (box[mostTopBox + 3].type === box[mostTopBox + 6].type);
    }
  }

  checkHorizontal = (box, mostLeftBox) => {
    if (box[mostLeftBox] && box[mostLeftBox + 1] && box[mostLeftBox + 2]) {
      return (box[mostLeftBox].type === box[mostLeftBox + 1].type) && (box[mostLeftBox + 1].type === box[mostLeftBox + 2].type);
    }
  }

  checkDiagonal = (box, type, topLeftBox) => {
    switch (type) {
      case 'left': {
        if (box[topLeftBox] && box[topLeftBox + 4] && box[topLeftBox + 8]) {
          return (box[topLeftBox].type === box[topLeftBox + 4].type) && (box[topLeftBox + 4].type === box[topLeftBox + 8].type)
        } break;
      }
      case 'right': {
        if (box[topLeftBox + 2] && box[(topLeftBox + 2) + 2] && box[(topLeftBox + 2) + 4]) {
          return (box[topLeftBox + 2].type === box[(topLeftBox + 2) + 2].type) && (box[(topLeftBox + 2) + 2].type === box[(topLeftBox + 2) + 4].type)
        } break;
      }
      default: break;
    }
  }

  checkWinner = (loc, box) => {
    const score = { ...this.state.score }

    const mostTopBox = this.mostTopBox(loc)
    const mostLeftBox = this.mostLeftBox(loc)
    const topLeftBox = this.mostLeftBox(this.mostTopBox(loc))

    // Check is there any streak in same column
    const vertical = this.checkVertical(box, mostTopBox)
    // Check is there any streak in same row
    const horizontal = this.checkHorizontal(box, mostLeftBox)
    // Check is there any streak in diagonal from top left to bottom right
    const leftDiagonal = this.checkDiagonal(box, 'left', topLeftBox);
    // Check is there any streak in diagonal from top right to bottom left
    const rightDiagonal = this.checkDiagonal(box, 'right', topLeftBox);

    // If there is any streak lets decide the winner
    if (vertical || horizontal || leftDiagonal || rightDiagonal) {
      switch (box[loc].type) {
        case ('path'): score[1] += 1; break;
        case ('circle'): score[2] += 1; break;
        default: break;
      }
      return { isFinish: true, score }
    }
    return { isFinish: false }
  }

  locateHorizontal = (isCircle, loc, spot) => {
    switch(this.checkRow(loc)) {
      case (1): isCircle ? spot.y = 83 : spot.y = 30; break;
      case (2): isCircle ? spot.y = 250 : spot.y = 197; break;
      case (3): isCircle ? spot.y = 417 : spot.y = 364; break;
      default: break;
    }
  }

  locateVertical = (isCircle, loc, spot) => {
    switch (this.checkColumn(loc)) {
      case (1): isCircle ? spot.x = 83 : spot.x = 30; break;
      case (2): isCircle ? spot.x = 250 : spot.x = 197; break;
      case (3): isCircle ? spot.x = 417 : spot.x = 364; break;
      default: break;
    }
  }

  putCircle = (loc) => {
    let centerSpot = { x: null, y: null };
    this.locateHorizontal(true, loc, centerSpot)
    this.locateVertical(true, loc, centerSpot)

    return <circle cx={centerSpot.x} cy={centerSpot.y} r="55" />
  }

  putCross = (loc) => {
    let topLeftSpot = { x: null, y: null };
    this.locateHorizontal(false, loc, topLeftSpot)
    this.locateVertical(false, loc, topLeftSpot)

    return <path d={`
      M${topLeftSpot.x} ${topLeftSpot.y} ${topLeftSpot.x + 107} ${topLeftSpot.y + 107} 
      M${topLeftSpot.x} ${topLeftSpot.y + 107} ${topLeftSpot.x + 107} ${topLeftSpot.y}
    `} />
  }

  onBoxClick = (i) => {
    if (this.state.box[i]) return

    this.setState(state => ({ turn: state.turn + 1 }));

    const box = { ...this.state.box }

    switch(this.state.turn % 2) {
      case (0): box[i] = this.putCircle(i); break;
      case (1): box[i] = this.putCross(i); break;
      default: break;
    }

    this.setState({ box })

    const result = this.checkWinner(i, box);

    if (this.state.turn === 9 || result.isFinish) {
      setTimeout(() => {
        this.setState({ turn: 1, score: result.score, box: {
          1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 
        }})
      }, 500)
    }
  }

  renderBox = () => {
    const boxes = []
    for (let i = 1; i <= 9; i++) {
      boxes.push(<div key={i} onClick={() => this.onBoxClick(i)} className={`box`}></div>)
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
        <div className="boxes">
          { this.renderBox() }
        </div>
      </section>
    )
  }
}