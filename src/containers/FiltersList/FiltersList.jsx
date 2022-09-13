import React from "react";
import "./FiltersList.scss";
import FilterOption from "../../components/FilterOption/FilterOption";

const FiltersList = (props) => {
  const { handleFilters } = props;

  return (
    <div className="filtersList">
      <h3>Filters:</h3>
      <div className="filtersList__options">
        <FilterOption
          text="ABV > 6.0%"
          value={"High ABV"}
          handleFilters={handleFilters}
        />
        <FilterOption
          text="Acidic (ph<4)"
          value={"Acidic"}
          handleFilters={handleFilters}
        />
        <FilterOption
          text="Classic Range"
          value={"ClassicRange"}
          handleFilters={handleFilters}
        />
      </div>
    </div>
  );
};

export default FiltersList;
