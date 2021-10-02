import { useState } from "react";
import "./App.css";
import ChangeNubers from "./components/changeNumbers/ChangeNubers";
import ShowNumber from "./components/showNumber/ShowNumber";

function App() {
  const [counter, setCounter] = useState(0);

  const increaseVal = () => {
    setCounter(counter + 1);
  };

  const decreaseVal = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="container">
      <ShowNumber number={counter} />
      <ChangeNubers plusFunc={increaseVal} minusFunc={decreaseVal} />
    </div>
  );
}

export default App;
