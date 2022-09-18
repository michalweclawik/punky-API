import "./App.scss";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import { useState, useEffect } from "react";
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import CardDetail from "./containers/CardDetail/CardDetail";

function App() {
  // set
  const [beersArray, setbeersArray] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");

  //  get data
  const getBeers = async () => {
    const url = `https://api.punkapi.com/v2/beers?page=1&per_page=80`;
    const res = await fetch(url);
    const data = await res.json();
    setbeersArray(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  // filters function
  const handleFilters = (e) => {
    if (e.target.checked) {
      if (e.target.value === "High ABV") {
        setbeersArray(beersArray.filter((beer) => beer.abv > 6));
      }
      if (e.target.value === "Acidic") {
        setbeersArray(beersArray.filter((beer) => beer.ph < 4));
      }
      if (e.target.value === "ClassicRange") {
        setbeersArray(
          beersArray.filter((beer) => beer.first_brewed.split("/")[1] < 2008)
        );
      }
    } else {
      getBeers();
    }
  };

  // event function
  const handleInput = (e) => {
    e.preventDefault();
    const clearInput = e.target.value.toLowerCase();
    setSearchTerms(clearInput);
  };
  // filtering function
  const filteredBeers = beersArray.filter((beer) => {
    const beerToLowerCase = beer.name.toLowerCase();
    return beerToLowerCase.includes(searchTerms);
  });

  return (
    <HashRouter>
      <div className="app">
        <Nav
          label="beer"
          handleInput={handleInput}
          searchTerms={searchTerms}
          handleFilters={handleFilters}
        />

        <Routes>
          <Route
            path="/card/:beerId"
            element={<CardDetail beersArr={filteredBeers} />}
          ></Route>
          <Route
            path="/punky-API"
            element={filteredBeers && <Main beersArr={filteredBeers} />}
          ></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
