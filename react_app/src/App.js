import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/cat_facts/cardList/CardList";

function App() {
  const [factsArr, setFactsArr] = useState([]);
  const [limit, setLimit] = useState(5);

  const getData = async () => {
    let response = await axios.get(
      `https://catfact.ninja/facts?limit=${limit}`
    );
    console.log(response.data);
    setFactsArr(response.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDropDown = (event) => {
    setLimit(event.target.value);
  };

  return (
    <div>
      <select
        id="cars"
        name="cars"
        onChange={(e) => {
          handleDropDown(e);
        }}
        value={limit}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
      <button onClick={getData}>FETCH</button>
      <CardList listFacts={factsArr} />
    </div>
  );
}

export default App;
