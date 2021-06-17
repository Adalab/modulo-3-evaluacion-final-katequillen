import React from "react";
import FilterByName from "./FilterByName";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <FilterByName
        handleFilter={props.handleFilter}
        nameFilter={props.nameFilter}
      />
    </form>
  );
};

export default Filters;
