import React, { Component } from "react";

const Search = props => {
  return (
    <input
      className="input search-bar"
      value={props.search} //we set the value to the user search input
      onChange={evt => props.handleSearchChange(evt.target.value)}
      type="text"
      placeholder="What do you want to eat?"
    />
  );
};

export default Search;
