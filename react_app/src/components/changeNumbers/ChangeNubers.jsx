import React from "react";
import "./ChangeNumbers.css";

export default function ChangeNubers({ plusFunc, minusFunc }) {
  return (
    <div className="btn-container">
      <button className="btn" onClick={minusFunc}>
        -
      </button>
      <button className="btn" onClick={plusFunc}>
        +
      </button>
    </div>
  );
}
