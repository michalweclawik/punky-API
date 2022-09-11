import "./App.scss";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import { useState } from "react";
import beers from "./data/beers";

function App() {
  // api
  const [beerArrayForSearch, setbeerArrayForSearch] = useState(beers);
  // Search
  const [searchTerms, setSearchTerms] = useState("");

  // filters
  const [highABVchecked, setHighABVchecked] = useState(false);
  const [acidicchecked, setacidicchecked] = useState(false);

  const handleFilters = (e) => {
    // console.log(e.target.value);

    if (e.target.value == "High ABV") {
      setHighABVchecked(!highABVchecked);

      if (!highABVchecked) {
        const filteredBeersByHighABV = beers.filter((beer) => beer.abv > 6);
        setbeerArrayForSearch(filteredBeersByHighABV);
      } else {
        setbeerArrayForSearch(beers);
      }
    }
    if (e.target.value == "Acidic") {
      setacidicchecked(!acidicchecked);

      if (!acidicchecked) {
        const filteredBeersByAcidic = beers.filter((beer) => beer.ph < 4);
        //  || beer.ph = null);
        setbeerArrayForSearch(filteredBeersByAcidic);
      } else {
        setbeerArrayForSearch(beers);
      }
    }
  };

  const handleInput = (e) => {
    e.preventDefault();
    const clearInput = e.target.value.toLowerCase();
    setSearchTerms(clearInput);
  };

  const filteredBeers = beerArrayForSearch.filter((beer) => {
    const beerToLowerCase = beer.name.toLowerCase();
    return beerToLowerCase.includes(searchTerms);
  });

  return (
    <div className="app">
      <section className="nav">
        <Nav
          label="beer"
          handleInput={handleInput}
          searchTerms={searchTerms}
          highABVchecked={highABVchecked}
          handleFilters={handleFilters}
          acidicchecked={acidicchecked}
        />
      </section>

      <section className="app__main">
        <Main beersArr={filteredBeers} />
      </section>
    </div>
  );
}

export default App;
