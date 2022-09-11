import React from "react";

const FilterOption = (props) => {
  const { text, handleFilters, highABVchecked, value } = props;
  return (
    <div className="filterOption">
      <label className="label">{text}</label>
      <input
        type="checkbox"
        value={value}
        checked={highABVchecked}
        onChange={handleFilters}
      />
    </div>
  );
};

export default FilterOption;
