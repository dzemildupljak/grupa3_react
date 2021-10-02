import React from "react";
import "./ShowNumber.css";

export default function ShowNumber({ number }) {
  return <div className="show-num">{number >= 0 ? `+${number}` : number}</div>;
}
