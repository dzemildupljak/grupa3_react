import React from "react";

export default function NewTodoItem({ changeInput, title, addNewItem }) {
  return (
    <div className="addItem">
      <button onClick={addNewItem}>Add task</button>
      <input type="text" value={title} onChange={(e) => changeInput(e)} />
    </div>
  );
}
