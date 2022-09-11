import React, { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";
import "./Nav.scss";

const Nav = (props) => {
  const { handleInput, searchTerms, handleFilters, highABVchecked } = props;
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
          highABVchecked={highABVchecked}
          handleFilters={handleFilters}
        />
        <a href="/create">New Bear</a>
        <a href="/">Contact</a>
      </div>
    </div>
  );
};

export default Nav;
