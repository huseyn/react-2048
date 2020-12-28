import React, { Component } from "react";
import Square from "../Square/Square";
import "./Board.css";

class Board extends Component {
  state = {};

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
    return (
      <div className="board-container">
        <Square />
      </div>
    );
  };
}

export default Board;
