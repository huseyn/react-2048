import React from "react";
import "./Square.css";

const Square = ({ square }) => {
  return <div className="square-container">{square.displayValue}</div>;
};

export default Square;
