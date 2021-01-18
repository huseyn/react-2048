import React, { Component } from "react";
import Square from "../Square/Square";
import "./Board.css";

class Board extends Component {
  state = {
    squares: [
      [
        { id: 1, displayValue: "" },
        { id: 2, displayValue: "" },
        { id: 3, displayValue: "" },
        { id: 4, displayValue: "" },
      ],
      [
        { id: 5, displayValue: "" },
        { id: 6, displayValue: "" },
        { id: 7, displayValue: "" },
        { id: 8, displayValue: "" },
      ],
      [
        { id: 9, displayValue: "" },
        { id: 10, displayValue: "" },
        { id: 11, displayValue: "" },
        { id: 12, displayValue: "" },
      ],
      [
        { id: 13, displayValue: "" },
        { id: 14, displayValue: "" },
        { id: 15, displayValue: "" },
        { id: 16, displayValue: "" },
      ],
    ],
  };

  setRandomValue = (init) => {
    let { squares } = this.state;

    let rowIndex = Math.floor(Math.random() * squares.length);
    let colIndex = Math.floor(Math.random() * squares.length);

    while (squares[rowIndex][colIndex].displayValue !== "") {
      rowIndex = Math.floor(Math.random() * squares.length);
      colIndex = Math.floor(Math.random() * squares.length);
    }

    if (init) {
      while (rowIndex === colIndex)
        colIndex = Math.floor(Math.random() * squares.length);

      squares[rowIndex][colIndex] = this.updateDisplayValue(
        squares[rowIndex][colIndex],
        "2"
      );
    }

    squares[colIndex][rowIndex] = this.updateDisplayValue(
      squares[colIndex][rowIndex],
      "2"
    );

    this.setState({ squares });
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
    this.setRandomValue(true);
    document.addEventListener("keydown", this.executeFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.executeFunction, false);
  }

  render = () => {
    const one_dimension_arr = [].concat(...this.state.squares);

    const squares = one_dimension_arr.map((square) => (
      <Square key={square.id} square={square} />
    ));

    /**
     * 
     * const squares = this.state.squares.map((subArray) => {
      if (Array.isArray(subArray))
        subArray.map((square) => <Square square={square} />);
    });
     */

    return <div className='board-container'>{squares}</div>;
  };
}

export default Board;
