import React, { Fragment } from "react";
import {searchFacets} from "./SearchFacetsService";
import SearchFacets from "./SearchFacets";

export default function SearchBar(props) {
  return (
    <div className="searchbar">
      <SearchFacets facets={searchFacets} />
    </div>
  );
}
