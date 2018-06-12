import React from 'react'

import './Tictactoe.css'

export default class Tictactoe extends React.Component {
  state = {
    turn: 0,
    status: {
      "a1": undefined,
      "a2": undefined,
      "a3": undefined,
      "b1": undefined,
      "b2": undefined,
      "b3": undefined,
      "c1": undefined,
      "c2": undefined,
      "c3": undefined
    }
  }

  onSelectBox = (box) => {
    let mark = "O"
    if (this.state.turn % 2 === 0) {
      mark = "X"
    }
    this.setState(prevState => {
      prevState.status[box] = mark      
      return {
        turn: prevState.turn + 1,
        status: prevState.status        
      }
    })
    // if (this.state.status[box] === mark)
    setTimeout(() => {
      this.checkCondition()
    }, 500)
  }

  checkCondition = () => {
    let status = this.state.status;

    const cond1a = Object.is(status.a1, status.a2) && Object.is(status.a1, status.a3) && Object.is(status.a1, "X")
    const cond2a = Object.is(status.b1, status.b2) && Object.is(status.b1, status.b3) && Object.is(status.b1, "X") 
    const cond3a = Object.is(status.c1, status.c2) && Object.is(status.c1, status.c3) && Object.is(status.c1, "X") 
    
    const cond4a = Object.is(status.a1, status.b1) && Object.is(status.a1, status.c1) && Object.is(status.a1, "X")     
    const cond5a = Object.is(status.a2, status.b2) && Object.is(status.a2, status.c2) && Object.is(status.a2, "X") 
    const cond6a = Object.is(status.a3, status.b3) && Object.is(status.a3, status.c3) && Object.is(status.a3, "X") 

    const cond7a = Object.is(status.a1, status.b2) && Object.is(status.a1, status.c3) && Object.is(status.a1, "O") 
    const cond8a = Object.is(status.a3, status.b2) && Object.is(status.a3, status.c1) && Object.is(status.a3, "O") 
    
    const cond1b = Object.is(status.a1, status.a2) && Object.is(status.a1, status.a3) && Object.is(status.a1, "O")
    const cond2b = Object.is(status.b1, status.b2) && Object.is(status.b1, status.b3) && Object.is(status.b1, "O") 
    const cond3b = Object.is(status.c1, status.c2) && Object.is(status.c1, status.c3) && Object.is(status.c1, "O") 
    
    const cond4b = Object.is(status.a1, status.b1) && Object.is(status.a1, status.c1) && Object.is(status.a1, "O")     
    const cond5b = Object.is(status.a2, status.b2) && Object.is(status.a2, status.c2) && Object.is(status.a2, "O") 
    const cond6b = Object.is(status.a3, status.b3) && Object.is(status.a3, status.c3) && Object.is(status.a3, "O") 

    const cond7b = Object.is(status.a1, status.b2) && Object.is(status.a1, status.c3) && Object.is(status.a1, "O") 
    const cond8b = Object.is(status.a3, status.b2) && Object.is(status.a3, status.c1) && Object.is(status.a3, "O") 
    
    const isPlayerOneWin = cond1a || cond2a || cond3a || cond4a || cond5a || cond6a || cond7a || cond8a;
    const isPlayerTwoWin = cond1b || cond2b || cond3b || cond4b || cond5b || cond6b || cond7b || cond8b;

    if (this.state.turn === 8) {
      console.log("Tie!")
      this.resetAll()
    } else if (isPlayerOneWin) {
      console.log("Player one winner")
      this.resetAll()
    } else if (isPlayerTwoWin) {
      console.log("Player two winner")
      this.resetAll()
    }
  }

  resetAll = () => {
    this.setState(prevState => {
      for (var key in prevState.status) {
        prevState.status[key] = undefined
      }
      return {
        turn: 0,
        status: prevState.status        
      }
    })
  }

  render(){
    return (
      <section className="ttt">
        <div className="box-section">
          <div className="box box1" onClick={() => this.onSelectBox("a1")}><div>{ this.state.status.a1 }</div></div>
          <div className="box box2" onClick={() => this.onSelectBox("a2")}><div>{ this.state.status.a2 }</div></div>
          <div className="box box3" onClick={() => this.onSelectBox("a3")}><div>{ this.state.status.a3 }</div></div>
          <div className="box box4" onClick={() => this.onSelectBox("b1")}><div>{ this.state.status.b1 }</div></div>
          <div className="box box5" onClick={() => this.onSelectBox("b2")}><div>{ this.state.status.b2 }</div></div>
          <div className="box box6" onClick={() => this.onSelectBox("b3")}><div>{ this.state.status.b3 }</div></div>
          <div className="box box7" onClick={() => this.onSelectBox("c1")}><div>{ this.state.status.c1 }</div></div>
          <div className="box box8" onClick={() => this.onSelectBox("c2")}><div>{ this.state.status.c2 }</div></div>
          <div className="box box9" onClick={() => this.onSelectBox("c3")}><div>{ this.state.status.c3 }</div></div>
        </div>        
      </section>
    )
  }
}