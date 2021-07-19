import React from "react";
import Container from "./Container";

const Search = ({ searchTerm, state, setState }) => {
  return (
    <div>
      <h2>{searchTerm} Images</h2>
      <Container state={state} setState={setState} searchTerm={searchTerm} />
    </div>
  );
};

export default Search;
