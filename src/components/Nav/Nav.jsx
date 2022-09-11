import React, { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../../containers/FiltersList/FiltersList";
import "./Nav.scss";

const Nav = (props) => {
  const {
    handleInput,
    searchTerms,
    handleFilters,
    highABVchecked,
    acidicchecked,
  } = props;
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
          acidicchecked={acidicchecked}
        />
      </div>
    </div>
  );
};

export default Nav;
