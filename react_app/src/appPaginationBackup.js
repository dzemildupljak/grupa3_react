import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/cat_facts/cardList/CardList";
import PageButtons from "./components/page_buttons/PageButtons";

function App() {
  const [factsArr, setFactsArr] = useState({ data: [] });
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      var response = await axios.get(
        `https://centarnitbe.herokuapp.com/user/all`
      );
      // var response = await axios.get(
      //   `https://catfact.ninja/facts?limit=${limit}&page=${page}`
      // );
      console.log(response.data);
      // setFactsArr(response.data);
      setFactsArr(response);
    } catch (error) {
      console.log("this is my error:=====", error);
    }
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
    if (page < 67) {
      setPage(page + 1);
    }
  };

  const handleSpecificPage = (page_num) => setPage(page_num);

  const createUser = async () => {
    let user = {
      name: "Naila",
      email: "nailazukanovic@gmail.com",
      username: "naila",
      password: "naila12",
    };

    await axios.post("https://centarnitbe.herokuapp.com/user/", user);
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
      <CardList listFacts={factsArr.data} />
      <div className="pagination">
        <PageButtons
          handlerFunc={prevPageHandler}
          text="< Prev page"
          type="warning"
        />
        <h3
          onClick={() => {
            handleSpecificPage(factsArr.from);
          }}
        >
          {factsArr.from}
        </h3>
        <h3
          onClick={() => {
            handleSpecificPage(factsArr.from + 1);
          }}
        >
          {factsArr.from + 1}
        </h3>
        <h3>...</h3>
        {page > 1 ? (
          <h3
            onClick={() => {
              handleSpecificPage(factsArr.current_page - 1);
            }}
          >
            {page - 1}
          </h3>
        ) : (
          <h3></h3>
        )}
        <h3>{factsArr.current_page}</h3>
        {page < 66 ? (
          <h3
            onClick={() => {
              handleSpecificPage(factsArr.current_page + 1);
            }}
          >
            {page + 1}
          </h3>
        ) : (
          <h3></h3>
        )}
        <h3>...</h3>
        <h3
          onClick={() => {
            handleSpecificPage(factsArr.last_page - 1);
          }}
        >
          {factsArr.last_page - 1}
        </h3>
        <h3
          onClick={() => {
            handleSpecificPage(factsArr.last_page);
          }}
        >
          {factsArr.last_page}
        </h3>
        <PageButtons
          handlerFunc={nextPageHandler}
          text="Next page >"
          type="default"
        />
      </div>
      <button onClick={createUser}>CreateUser</button>
    </div>
  );
}

export default App;
