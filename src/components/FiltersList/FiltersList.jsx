import React from "react";
import "./FiltersList";
import FilterOption from "../FilterOption/FilterOption";

const FiltersList = (props) => {
  const { handleFilters, highABVchecked } = props;

  return (
    <div>
      <h3>Filters:</h3>
      <FilterOption
        text="ABV greater than 6.0%"
        value={"High ABV"}
        highABVchecked={highABVchecked}
        handleFilters={handleFilters}
      />
    </div>
  );
};

export default FiltersList;
