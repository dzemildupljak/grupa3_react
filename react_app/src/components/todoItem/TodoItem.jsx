import React from "react";
import "./TodoItem.css";

export default function TodoItem({
  itemTitle,
  isDone,
  indx,
  changeHandler,
  removeItem,
}) {
  return (
    <div className="todoItem">
      <h3 className={isDone ? "doned" : ""}>{itemTitle}</h3>
      <div className="inputs">
        <button onClick={() => removeItem(indx)}>X</button>
        <input
          className="input_checkbox"
          type="checkbox"
          checked={isDone}
          onChange={() => changeHandler(indx)}
        />
      </div>
    </div>
  );
}
