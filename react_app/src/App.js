import { useState } from "react";
import "./App.css";
import TodoItem from "./components/todoItem/TodoItem";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState([
    {
      id: 0,
      title: "Kupit hleb",
      is_done: false,
    },
    {
      id: 1,
      title: "Ici kod frizera",
      is_done: false,
    },
    {
      id: 2,
      title: "Prijaviti ispit",
      is_done: true,
    },
  ]);

  var counter = 2;

  const hanleInputChange = (event) => {
    setInputItem(event.target.value);
  };

  const addNewItem = () => {
    counter += 1;

    let item = {
      id: counter,
      title: inputItem,
      is_done: false,
    };

    setItems([...items, item]);
    setInputItem("");
  };

  return (
    <div>
      <div className="addItem">
        <button onClick={addNewItem}>Add task</button>
        <input
          type="text"
          value={inputItem}
          onChange={(e) => hanleInputChange(e)}
        />
      </div>
      <div className="item">
        {items.map((item, index) => {
          return (
            <TodoItem
              itemTitle={item.title}
              isDone={item.is_done}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
