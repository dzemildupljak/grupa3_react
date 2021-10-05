import React from "react";
import "./TodoItem.css";

export default function TodoItem({ itemTitle, isDone }) {
  return (
    <div className="todoItem">
      <h3>{itemTitle}</h3>
      <input type="checkbox" checked={isDone} />
    </div>
  );
}
