import React from "react";
import Container from "./Container";

const Item = ({ searchTerm, state, setState }) => {
  return (
    <div>
      <h2>{searchTerm} Gifs</h2>
      <Container state={state} setState={setState} searchTerm={searchTerm} />
    </div>
  );
};

export default Item;
