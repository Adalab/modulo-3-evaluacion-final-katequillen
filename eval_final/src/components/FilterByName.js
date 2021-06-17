import React from "react";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };

  return (
    <>
      <label htmlFor="name"></label>
      <input
        className="search_box"
        id="search"
        placeholder="Hey! Who are you looking for?"
        name="search"
        value={props.nameFilter}
        onChange={handleChange}
      ></input>
    </>
  );
};

export default FilterByName;
