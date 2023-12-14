import React, { PureComponent, Fragment } from "react";

import "../css/Tictactoe/Board.css";

class Board extends PureComponent {
  checkColumn = (loc) => {
    switch (loc % 3) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 0:
        return 3;
      default:
        break;
    }
  };

  checkRow = (loc) => {
    switch (Math.ceil(loc / 3)) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      default:
        break;
    }
  };

  mostLeftBox = (loc) => {
    if (this.checkColumn(loc) === 1) {
      return loc;
    } else {
      return this.mostLeftBox(loc - 1);
    }
  };

  mostTopBox = (loc) => {
    if (this.checkRow(loc) === 1) {
      return loc;
    } else {
      return this.mostTopBox(loc - 3);
    }
  };

  checkVertical = (box, mostTopBox) => {
    if (box[mostTopBox] && box[mostTopBox + 3] && box[mostTopBox + 6]) {
      return (
        box[mostTopBox].type === box[mostTopBox + 3].type &&
        box[mostTopBox + 3].type === box[mostTopBox + 6].type
      );
    }
  };

  checkHorizontal = (box, mostLeftBox) => {
    if (box[mostLeftBox] && box[mostLeftBox + 1] && box[mostLeftBox + 2]) {
      return (
        box[mostLeftBox].type === box[mostLeftBox + 1].type &&
        box[mostLeftBox + 1].type === box[mostLeftBox + 2].type
      );
    }
  };

  checkDiagonal = (box, type, topLeftBox) => {
    switch (type) {
      case "left": {
        if (box[topLeftBox] && box[topLeftBox + 4] && box[topLeftBox + 8]) {
          return (
            box[topLeftBox].type === box[topLeftBox + 4].type &&
            box[topLeftBox + 4].type === box[topLeftBox + 8].type
          );
        }
        break;
      }
      case "right": {
        if (
          box[topLeftBox + 2] &&
          box[topLeftBox + 2 + 2] &&
          box[topLeftBox + 2 + 4]
        ) {
          return (
            box[topLeftBox + 2].type === box[topLeftBox + 2 + 2].type &&
            box[topLeftBox + 2 + 2].type === box[topLeftBox + 2 + 4].type
          );
        }
        break;
      }
      default:
        break;
    }
  };

  checkWinner = (loc, box) => {
    const score = { ...this.props.score };

    const mostTopBox = this.mostTopBox(loc);
    const mostLeftBox = this.mostLeftBox(loc);
    const topLeftBox = this.mostLeftBox(this.mostTopBox(loc));

    // Check is there any streak in same column
    const vertical = this.checkVertical(box, mostTopBox);
    // Check is there any streak in same row
    const horizontal = this.checkHorizontal(box, mostLeftBox);
    // Check is there any streak in diagonal from top left to bottom right
    const leftDiagonal = this.checkDiagonal(box, "left", topLeftBox);
    // Check is there any streak in diagonal from top right to bottom left
    const rightDiagonal = this.checkDiagonal(box, "right", topLeftBox);

    // If there is any streak lets decide the winner
    if (vertical || horizontal || leftDiagonal || rightDiagonal) {
      switch (box[loc].type) {
        case "path":
          score.firstPlayer += 1;
          break;
        case "circle":
          score.secondPlayer += 1;
          break;
        default:
          break;
      }
      return { isFinish: true, score };
    }
    return { isFinish: false, score };
  };

  locateHorizontal = (isCircle, loc, spot) => {
    const { alpha, beta, gama, omega, teta, delta } = this.props.squarePoint;

    switch (this.checkRow(loc)) {
      case 1:
        isCircle ? (spot.y = alpha) : (spot.y = beta);
        break;
      case 2:
        isCircle ? (spot.y = gama) : (spot.y = omega);
        break;
      case 3:
        isCircle ? (spot.y = teta) : (spot.y = delta);
        break;
      default:
        break;
    }
  };

  locateVertical = (isCircle, loc, spot) => {
    const { alpha, beta, gama, omega, teta, delta } = this.props.squarePoint;

    switch (this.checkColumn(loc)) {
      case 1:
        isCircle ? (spot.x = alpha) : (spot.x = beta);
        break;
      case 2:
        isCircle ? (spot.x = gama) : (spot.x = omega);
        break;
      case 3:
        isCircle ? (spot.x = teta) : (spot.x = delta);
        break;
      default:
        break;
    }
  };

  putCircle = (loc) => {
    let centerSpot = { x: null, y: null };
    this.locateHorizontal(true, loc, centerSpot);
    this.locateVertical(true, loc, centerSpot);

    let r = 55;
    if (window.innerWidth < 768) r = 41.25;
    if (window.innerWidth < 481) r = 27.5;

    return (
      <circle className="circle" cx={centerSpot.x} cy={centerSpot.y} r={r} />
    );
  };

  putCross = (loc) => {
    let topLeftSpot = { x: null, y: null };
    this.locateHorizontal(false, loc, topLeftSpot);
    this.locateVertical(false, loc, topLeftSpot);

    let r = 107;
    if (window.innerWidth < 768) r = 70;
    if (window.innerWidth < 481) r = 50;

    return (
      <path
        className="cross"
        d={`
      M${topLeftSpot.x} ${topLeftSpot.y} ${topLeftSpot.x + r} ${
          topLeftSpot.y + r
        } 
      M${topLeftSpot.x} ${topLeftSpot.y + r} ${topLeftSpot.x + r} ${
          topLeftSpot.y
        }
    `}
      />
    );
  };

  actionBotClick = () => {
    const notCheckedBoxIndexes = [];
    for (let i = 1; i <= 9; i++) {
      if (!this.props.board[i]) {
        notCheckedBoxIndexes.push(i);
      }
    }

    // Win strategy, source: https://www.wikihow.com/Win-at-Tic-Tac-Toe
    let i;
    const cornerIndexes = notCheckedBoxIndexes.filter(
      (index) => index == 1 || index == 3 || index == 7 || index == 9
    );

    // 1. Always choose the center
    if (notCheckedBoxIndexes.includes(5)) {
      i = 5;
    } else if (cornerIndexes.length > 1 && this.props.turn <= 2) {
      // 2. If center already filled, choose the corner
      const cornerIndexes = notCheckedBoxIndexes.filter(
        (index) => index == 1 || index == 3 || index == 7 || index == 9
      );

      i = parseInt(
        cornerIndexes[Math.floor(Math.random() * cornerIndexes.length)]
      );
    } else {
      i = parseInt(
        notCheckedBoxIndexes[
          Math.floor(Math.random() * notCheckedBoxIndexes.length)
        ]
      );
    }

    this.props.addTurn();

    const box = { ...this.props.board };

    if (this.props.turn % 2 === 0) box[i] = this.putCross(i);
    else if (this.props.turn % 2 === 1) box[i] = this.putCircle(i);

    this.props.updateBoard(box);

    const result = this.checkWinner(i, box);

    if (this.props.turn === 10 || result.isFinish) {
      this.props.gameFinish();
      setTimeout(() => {
        this.props.resetGame(result.score);
        if (this.props.player === "circle") {
          setTimeout(this.actionBotClick, 500);
        }
      }, 1000);
    }
  };

  actionPlayerClick = (i) => {
    if (this.props.player === "cross" && this.props.turn % 2 === 0) return;
    if (this.props.player === "circle" && this.props.turn % 2 === 1) return;
    if (this.props.board[i] || this.props.isFinish) return;

    this.props.addTurn();

    const box = { ...this.props.board };

    if (this.props.turn % 2 === 0) box[i] = this.putCircle(i);
    else if (this.props.turn % 2 === 1) box[i] = this.putCross(i);

    this.props.updateBoard(box);

    const result = this.checkWinner(i, box);

    if (this.props.turn === 9 || result.isFinish) {
      this.props.gameFinish();
      setTimeout(() => {
        this.props.resetGame(result.score);
        if (this.props.player === "circle") {
          setTimeout(this.actionBotClick, 500);
        }
      }, 1000);
    } else {
      setTimeout(() => {
        this.actionBotClick();
      }, 500);
    }
  };

  renderBox = () => {
    const boxes = [];
    for (let i = 1; i <= 9; i++) {
      boxes.push(
        <div
          key={i}
          onClick={this.actionPlayerClick.bind(this, i)}
          className={`box`}
        />
      );
    }
    return boxes;
  };

  renderSvgLine = () => {
    let { alpha, beta, gama, omega } = this.props.linePoint;

    return [
      <line
        className="line"
        key="1"
        x1={alpha}
        y1={beta}
        x2={omega}
        y2={beta}
      />,
      <line
        className="line"
        key="2"
        x1={alpha}
        y1={gama}
        x2={omega}
        y2={gama}
      />,
      <line
        className="line"
        key="3"
        x1={beta}
        y1={alpha}
        x2={beta}
        y2={omega}
      />,
      <line
        className="line"
        key="4"
        x1={gama}
        y1={alpha}
        x2={gama}
        y2={omega}
      />,
    ];
  };

  renderMark = () =>
    Object.keys(this.props.board).map((el, i) => (
      <Fragment key={i}>{this.props.board[el]}</Fragment>
    ));

  resetGame = () => {
    this.props.resetGame({ firstPlayer: 0, secondPlayer: 0 });
  };

  componentDidMount() {
    window.addEventListener("resize", this.resetGame);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resetGame);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.player !== this.props.player &&
      this.props.player === "circle"
    ) {
      setTimeout(() => {
        this.actionBotClick();
      }, 750);
    }
  }

  render() {
    return (
      <>
        <svg className="svg-board">
          {this.renderSvgLine()}
          {this.renderMark()}
        </svg>
        <div className="boxes">{this.renderBox()}</div>
      </>
    );
  }
}

export default Board;
