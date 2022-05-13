import React from "react";

import { List } from "./examples/slow-rendering/List";
import { PokemonSkeleton } from "./examples/data-fetching/PokemonSkeleton";
import { Pokemon as PokemonOld } from "./examples/data-fetching/old/Pokemon";
import { Pokemon as PokemoNew } from "./examples/data-fetching/new/Pokemon";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // return <PokemonOld id={1} />;
  return (
    <div className="d-flex justify-content-around mt-5">
      {/* <PokemonOld id={1} /> */}
      <React.Suspense fallback={<PokemonSkeleton />}>
        <PokemoNew id={1} />
      </React.Suspense>
    </div>
  );
}

export default App;
