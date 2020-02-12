import React, { Fragment, useContext, useEffect, useState } from "react";
import data from "../data";
import { Container, Row, Col } from "reactstrap";
import Product from "../Shared/Product";
import { SearchableContext } from "../Contexts/Searchable/SearchableContext";
import { calculateSearchProducts } from "./SearchFacetsService";
import { withContexts } from "../Contexts/AllContexts";
import { CartContext } from "../Contexts/Cart/CartContext";

function SearchPageProductsComponent({ searchContext, ...props }) {
  const [activeProducts, setActiveProducts] = useState(data);
  console.log(props);
  useEffect(() => {
    let productsToShow = calculateSearchProducts(searchContext);
    setActiveProducts(productsToShow);
  }, [searchContext.activeFacets]);

  return (
    <Container fluid={true}>
      <b>
        Active Products: {`${activeProducts.length}`} out of {`${data.length}`}
      </b>
      <Row className="productRow">
        {activeProducts.map((product, index) => (
          <Fragment key={index}>
            <Col xs="12" sm="6" md="4" lg="3">
              <Product item={product} />
            </Col>
          </Fragment>
        ))}
      </Row>

      {/* <h1>Line Items</h1>
      <p>
        Active Products: {`${activeProducts.length}`} out of {`${data.length}`}
      </p>
      <br />

      <LineItemHeader />
      <Row>
        {activeProducts.map((product, index) => (
          <Fragment>
            <Col xs="12" key={index}>
              <LineItem item={product} key={index} />
            </Col>
          </Fragment>
        ))}
      </Row> */}
    </Container>
  );
}

function LineItemHeader(props) {
  return (
    <Row>
      <Col xs="3">
        <b>Name</b>
      </Col>
      <Col xs="2">
        <b>Code</b>
      </Col>
      <Col xs="2">
        <b>Designer</b>
      </Col>
      <Col xs="2">
        <b>Price</b>
      </Col>
      <Col xs="3">
        <b>Add To Cart</b>
      </Col>
    </Row>
  );
}

export default withContexts(SearchPageProductsComponent, {
  searchContext: SearchableContext,
  cartContext: CartContext
});
