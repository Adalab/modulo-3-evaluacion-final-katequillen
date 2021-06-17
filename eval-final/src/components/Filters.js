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
      {/*//Filter by species //Filter by type //filter by planet of origin*/}
    </form>
  );
};

export default Filters;
