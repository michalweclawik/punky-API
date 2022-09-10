import React, { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import "./Nav.scss";

const Nav = (props) => {
  const { handleInput, searchTerms } = props;
  return (
    <div className="navbar">
      <h1 className="navbar__title">Punk BEER</h1>
      <div className="navbar__links">
        <SearchBox
          label="Beer Name  "
          searchTerm={searchTerms}
          handleInput={handleInput}
        />
        <FiltersList
          toggleAbv={toggleAbv}
          toggleClassic={toggleClassic}
          toggleAcidity={toggleAcidity}
        />
        <a href="/create">New Bear</a>
        <a href="/">Contact</a>
      </div>
    </div>
  );
};

export default Nav;
