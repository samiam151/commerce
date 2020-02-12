import React, { useState } from "react";
import { facets } from "../../Search/SearchFacetsService";

export const SearchableContext = React.createContext();

let initialState = generateInitialState();

function generateInitialState() {
  return facets.reduce((obj, next) => {
    obj[next] = [];
    return obj;
  }, {});
}

export function SearchableContextProvider({ children, ...props }) {
  const [activeFacets, setActiveFacets] = useState(initialState);

  function addActiveFacet(facet, value, isChecked) {
    let newState = Object.assign({}, activeFacets);
    if (!isChecked) {
      newState[facet].push(value);
    } else {
      let newStateValues = [...newState[facet]];
      newState[facet] = newStateValues.filter(v => v !== value);
    }
    setActiveFacets(newState);
  }

  function clearFacets() {
    setActiveFacets(generateInitialState());
  }

  return (
    <SearchableContext.Provider
      value={{
        addFacet: addActiveFacet,
        activeFacets: activeFacets,
        clearFacets: clearFacets
      }}
    >
      {children}
    </SearchableContext.Provider>
  );
}
