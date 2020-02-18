import React, { useContext, Fragment } from "react";
import { Input, FormGroup, Label } from "reactstrap";
import { searchFacets } from "./SearchFacetsService";
import { SearchableContext } from "../Contexts/Searchable/SearchableContext";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

export default function SearchFacets({ facets, ...props }) {
  const { clearFacets } = useContext(SearchableContext);
  return (
    <div className="search__searchFacets">
      <Button
        block
        color="danger"
        style={{ marginBottom: "1rem" }}
        onClick={clearFacets}
      >
        Clear All Facets
      </Button>
      {Object.keys(searchFacets).map((facet, index) => (
        <SearchFacet facet={facet} key={`searchFacet-${index}`} />
      ))}
    </div>
  );
}

function SearchFacet({ facet, ...props }) {
  return (
    <Fragment>
      <Button
        block
        color="primary"
        id={`facet--${facet}`}
        style={{ marginBottom: "1rem" }}
      >
        {facet}
      </Button>
      <UncontrolledCollapse isOpen={true} toggler={`facet--${facet}`}>
        <Card>
          <CardBody>
            {searchFacets[facet].map((item, index) => (
              <SearchFacetInput key={`searchFacetInput-${index}`} item={item} facet={facet} />
            ))}
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </Fragment>
  );
}

function SearchFacetInput({ facet, item, ...props }) {
  const searchContext = useContext(SearchableContext);
  const checked = Boolean(searchContext.activeFacets[facet].includes(item));
  return (
    <FormGroup>
      <Label for={item}>
        <Input
          type={"checkbox"}
          defaultChecked={checked}
          defaultValue={item}
          id={item}
          onClick={e =>
            searchContext.addFacet(facet, e.target.value, !e.target.checked)
          }
        />
        {item}
      </Label>
    </FormGroup>
  );
}
