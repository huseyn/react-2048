import React, { Component } from "react";
import Square from "../Square/Square";
import "./Board.css";

class Board extends Component {
  state = {};

  render = () => {
    return (
      <div className="board-container">
        <Square />
      </div>
    );
  };
}

export default Board;
