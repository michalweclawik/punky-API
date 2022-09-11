import React from "react";
import "./FiltersList";
import FilterOption from "../FilterOption/FilterOption";

const FiltersList = (props) => {
  const { handleFilters, highABVchecked, acidicchecked } = props;

  return (
    <div className="filterOption">
      <h3>Filters:</h3>
      <FilterOption
        text="ABV greater than 6.0%"
        value={"High ABV"}
        ischecked={highABVchecked}
        handleFilters={handleFilters}
      />
      <FilterOption
        text="Acidic (ph<4)"
        value={"Acidic"}
        ischecked={acidicchecked}
        handleFilters={handleFilters}
      />
    </div>
  );
};

export default FiltersList;
