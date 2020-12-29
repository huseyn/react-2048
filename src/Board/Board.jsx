import React, { Component } from "react";
import Square from "../Square/Square";
import "./Board.css";

class Board extends Component {
  state = {
    squares: [
      { id: 1, displayValue: "" },
      { id: 2, displayValue: "" },
      { id: 3, displayValue: "" },
      { id: 4, displayValue: "" },
      { id: 5, displayValue: "" },
      { id: 6, displayValue: "" },
      { id: 7, displayValue: "" },
      { id: 8, displayValue: "" },
      { id: 9, displayValue: "" },
      { id: 10, displayValue: "" },
      { id: 11, displayValue: "" },
      { id: 12, displayValue: "" },
      { id: 13, displayValue: "" },
      { id: 14, displayValue: "" },
      { id: 15, displayValue: "" },
      { id: 16, displayValue: "" },
    ],
  };

  setRandomValue = () => {
    let { squares } = this.state;
    const index1 = Math.floor(Math.random() * squares.length);
    squares[index1] = this.updateDisplayValue(squares[index1], "2");

    let index2 = Math.floor(Math.random() * squares.length);
    while (index1 === index2)
      index2 = Math.floor(Math.random() * squares.length);

    squares[index2] = this.updateDisplayValue(squares[index2], "2");

    this.setState({ squares });

    console.log(squares);
  };

  updateDisplayValue = (obj, value) => {
    return {
      ...obj,
      displayValue: value,
    };
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

  executeFunction(event) {
    if (event.keyCode === 27) {
      //Do whatever when esc is pressed
    }
  }
  componentDidMount() {
    this.setRandomValue();
    document.addEventListener("keydown", this.executeFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.executeFunction, false);
  }

  render = () => {
    const squares = this.state.squares.map((square) => (
      <Square displayValue={square.displayValue} />
    ));

    return <div className="board-container">{squares}</div>;
  };
}

export default Board;
