import React from 'react'

import './Tictactoe.css'

export default class Tictactoe extends React.Component {
  render(){
    return (
      <section className="ttt">
        <div className="box-section">
          <div className="box box1"><div className="mark"></div></div>
          <div className="box box2"><div className="mark"></div></div>
          <div className="box box3"><div className="mark"></div></div>
          <div className="box box4"><div className="mark"></div></div>
          <div className="box box5"><div className="mark"></div></div>
          <div className="box box6"><div className="mark"></div></div>
          <div className="box box7"><div className="mark"></div></div>
          <div className="box box8"><div className="mark"></div></div>
          <div className="box box9"><div className="mark"></div></div>
        </div>        
      </section>
    )
  }
}