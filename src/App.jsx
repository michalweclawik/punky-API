import "./App.scss";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import { useState } from "react";
import beers from "./data/beers";

function App() {
  const [searchTerms, setSearchTerms] = useState("");
  const [beerArrayForSearch, setbeerArrayForSearch] = useState(beers);

  const [highABVchecked, setHighABVchecked] = useState(false);

  const handleFilters = () => {
    setHighABVchecked(!highABVchecked);
    console.log(highABVchecked);
    if (!highABVchecked) {
      const filteredBeersByHighABV = beers.filter((beer) => beer.abv > 6);
      setbeerArrayForSearch(filteredBeersByHighABV);
    } else {
      setbeerArrayForSearch(beers);
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
        />
      </section>

      <section className="app__main">
        <Main beersArr={filteredBeers} />
      </section>
    </div>
  );
}

export default App;
