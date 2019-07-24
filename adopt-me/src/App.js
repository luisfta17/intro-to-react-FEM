import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="something-important"> Adopt me! pls </h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cocktatiel" />
      <Pet name="Doink" animal="Cat" breed="Mix" />
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
