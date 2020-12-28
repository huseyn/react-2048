import React from "react";
import "./Square.css";

const Square = ({ displayValue }) => {
  return <div className="square-container">{displayValue}</div>;
};

export default Square;
