import "./App.scss";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // API
  const [beersArray, setbeersArray] = useState([]);
  // Search
  const [searchTerms, setSearchTerms] = useState("");

  const getBeers = async () => {
    const url = `https://api.punkapi.com/v2/beers`;
    const res = await fetch(url);
    const data = await res.json();
    setbeersArray(data);
  };

  // getBeers();

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

  const handleInput = (e) => {
    e.preventDefault();
    const clearInput = e.target.value.toLowerCase();
    setSearchTerms(clearInput);
  };

  const filteredBeers = beersArray.filter((beer) => {
    const beerToLowerCase = beer.name.toLowerCase();
    return beerToLowerCase.includes(searchTerms);
  });

  return (
    <div className="app">
      <button onClick={getBeers}>Load page </button>

      <Nav
        label="beer"
        handleInput={handleInput}
        searchTerms={searchTerms}
        handleFilters={handleFilters}
      />

      <section className="app__main">
        {beersArray && <Main beersArr={filteredBeers} />}
      </section>
    </div>
  );
}

export default App;
