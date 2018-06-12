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
    this.checkCondition()
  }

  checkCondition(){
    const cond1 = this.state.a1 === this.state.a2 === this.state.a3
    const cond2 = this.state.b1 === this.state.b2 === this.state.b3
    const cond3 = this.state.c1 === this.state.c2 === this.state.c3
    
    const cond4 = this.state.a1 === this.state.b1 === this.state.c1    
    const cond5 = this.state.a2 === this.state.b2 === this.state.c2    
    const cond6 = this.state.a3 === this.state.b3 === this.state.c3    

    const cond7 = this.state.a1 === this.state.b2 === this.state.c3    
    const cond8 = this.state.a3 === this.state.b2 === this.state.c1
    
    if (this.state.turn === 8) {
      console.log("Tie!")
      this.setState(prevState => {
        for (var key in prevState.status) {
          prevState.status[key] = ""
        }
        return {
          turn: 0,
          status: prevState.status        
        }
      })
    }
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