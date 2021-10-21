import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/cat_facts/cardList/CardList";
import PageButtons from "./components/page_buttons/PageButtons";

function App() {
  const [factsArr, setFactsArr] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const getData = async () => {
    let response = await axios.get(
      `https://catfact.ninja/facts?limit=${limit}&page=${page}`
    );
    console.log(response.data);
    setFactsArr(response.data.data);
  };
  useEffect(() => {
    getData();
  }, [page]);

  const handleDropDown = (event) => {
    setLimit(event.target.value);
  };

  const prevPageHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const nextPageHandler = () => {
    if (page < 332) {
      setPage(page + 1);
    }
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
      <PageButtons handlerFunc={getData} text="Fetch data" type="danger" />
      <CardList listFacts={factsArr} />
      <div className="pagination">
        <PageButtons
          handlerFunc={prevPageHandler}
          text="< Prev page"
          type="warning"
        />
        <h3>{page}</h3>
        <PageButtons
          handlerFunc={nextPageHandler}
          text="Next page >"
          type="default"
          />
      </div>
    </div>
  );
}

export default App;
