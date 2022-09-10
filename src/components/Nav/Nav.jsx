import React, { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import "./Nav.scss";

const Nav = ({ beer }) => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const toogleSearch = () => {
    setShowSearchBox(!showSearchBox);
  };

  return (
    <div className="navbar">
      <h1 className="navbar__title">Punk BEER</h1>
      <div className="navbar__links">
        {showSearchBox && (
          <SearchBox label={beer.name} toogleSearch={toogleSearch} />
        )}

        <a onClick={toogleSearch} href="/">
          Search
        </a>
        <a href="/create">New Bear</a>
        <a href="/">Contact</a>
      </div>
    </div>
  );
};

export default Nav;
