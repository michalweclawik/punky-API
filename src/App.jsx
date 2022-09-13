import "./App.scss";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import { useState } from "react";

function App() {
  // API
  const [beersArray, setbeersArray] = useState([]);
  // Search
  const [searchTerms, setSearchTerms] = useState("");

  // filters
  const [highABVchecked, setHighABVchecked] = useState(false);
  const [acidicchecked, setacidicchecked] = useState(false);
  const [classicchecked, setclassicchecked] = useState(false);

  const getBeers = async () => {
    const url = `https://api.punkapi.com/v2/beers`;
    const res = await fetch(url);
    const data = await res.json();
    setbeersArray(data);
  };

  // getBeers();

  const handleFilters = (e) => {
    if (e.target.value === "High ABV") {
      setHighABVchecked(!highABVchecked);

      if (!highABVchecked) {
        const filteredBeersByHighABV = beersArray.filter(
          (beer) => beer.abv > 6
        );
        setbeersArray(filteredBeersByHighABV);
      } else {
        getBeers();
      }
    }
    if (e.target.value === "Acidic") {
      setacidicchecked(!acidicchecked);

      if (!acidicchecked) {
        const filteredBeersByAcidic = beersArray.filter((beer) => beer.ph < 4);
        setbeersArray(filteredBeersByAcidic);
      } else {
        getBeers();
      }
    }
    if (e.target.value === "ClassicRange") {
      console.log(e.target.value);
      setclassicchecked(!classicchecked);

      if (!classicchecked) {
        const filteredBeersByClassic = beersArray.filter(
          (beer) => beer.first_brewed.split("/")[1] < 2008
        );

        setbeersArray(filteredBeersByClassic);
      } else {
        getBeers();
      }
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
      <section className="nav">
        <Nav
          label="beer"
          handleInput={handleInput}
          searchTerms={searchTerms}
          handleFilters={handleFilters}
          acidicchecked={acidicchecked}
          highABVchecked={highABVchecked}
          classicchecked={classicchecked}
        />
      </section>

      <section className="app__main">
        {beersArray && <Main beersArr={filteredBeers} />}
      </section>
    </div>
  );
}

export default App;
