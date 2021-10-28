import { useState } from "react";
import "./App.css";
import NewTodoItem from "./components/newTodoItem/NewTodoItem";
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

  const [counter, setCounter] = useState(3);

  const hanleInputChange = (event) => {
    setInputItem(event.target.value);
  };

  const addNewItem = () => {
    let item = {
      id: counter,
      title: inputItem,
      is_done: false,
    };

    if (item.title) {
      setItems([...items, item]);
      setInputItem("");
      setCounter(counter + 1);
    }
  };

  const handleCheckedItem = (elIndex) => {
    setItems(
      items.map((el, index) => {
        if (index === elIndex) {
          el.is_done = !el.is_done;
        }
        return el;
      })
    );
  };

  const removeTodoItem = (elIndex) => {
    let localItems = [...items];
    localItems.splice(elIndex, 1);

    setItems(localItems);
  };

  return (
    <div>
      <NewTodoItem
        changeInput={hanleInputChange}
        title={inputItem}
        addNewItem={addNewItem}
      />
      {items.length === 0 ? (
        <h1>Lista je prazna!!!</h1>
      ) : (
        <div>
          <div className="item">
            {items.map((item, index) => {
              return (
                <TodoItem
                  itemTitle={item.title}
                  isDone={item.is_done}
                  key={index}
                  indx={index}
                  changeHandler={handleCheckedItem}
                  removeItem={removeTodoItem}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
