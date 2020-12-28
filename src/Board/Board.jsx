import React, { Component } from "react";
import Square from "../Square/Square";
import "./Board.css";

class Board extends Component {
  state = {
    squares: [
      { displayValue: "" },
      { displayValue: "" },
      { displayValue: "" },
      { displayValue: "" },
      { displayValue: "" },
      { displayValue: "" },
      { displayValue: "" },
      { displayValue: "" },
      { displayValue: "" },
      { displayValue: "" },
      { displayValue: "" },
      { displayValue: "" },
      { displayValue: "" },
      { displayValue: "" },
      { displayValue: "" },
      { displayValue: "" },
    ],
  };

  setRandomValue = () => {
    console.log("Set Random Value");
  };

  moveRight = () => {
    console.log("Move Right");
  };

  moveLeft = () => {
    console.log("Move Left");
  };

  moveUp = () => {
    console.log("Move Up");
  };

  moveDown = () => {
    console.log("Move Down");
  };

  render = () => {
    const squares = this.state.squares.map((square) => (
      <Square displayValue={square.displayValue} />
    ));

    return <div className="board-container">{squares}</div>;
  };
}

export default Board;
