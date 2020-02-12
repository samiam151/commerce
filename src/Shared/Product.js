import React, { Fragment } from "react";
import Purchasable from "../Contexts/Purchasable/Purchasable";
import Property from "../Helpers/Property";

export default function Product({ item }) {
  return (
    <div className="product">
      <div className="product--container">
        <img src="https://via.placeholder.com/450/" />
        <h4>{item["Name"]}</h4>
        <Property label="Code" value={item["Code"]} />
        <Property label="Description" value={item["Description"]} />
        <Property label="Availability" value={item["Availability"]} />
        <Property label="SearchFacet3" value={item["SearchFacet3"]} />
        <Property label="SearchFacet4" value={item["SearchFacet4"]} />
      </div>

      <Purchasable item={item} />
    </div>
  );
}
