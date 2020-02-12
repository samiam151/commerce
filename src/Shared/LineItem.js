import React, { useContext } from "react";
import Purchasable from "../Contexts/Purchasable/Purchasable";
import { Container, Row, Col } from "reactstrap";
import { Formatter } from "../Helpers/Functions";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { CartContext } from "../Contexts/Cart/CartContext";

export default function LineItem({ item, ...props }) {
  return (
    <div className="lineItem">
      <Container fluid={true}>
        <Row>
          <Col xs="12" md="3">
            <b>{item["Name"]}</b>
          </Col>
          <Col xs="12" md="2">
            {item["Code"]}
          </Col>
          <Col xs="12" md="2">
            {item["Designer"]}
          </Col>
          <Col xs="12" md="2">
            {Formatter.format(item["Price"])}
          </Col>
          <Col xs="12" md="3">
            {(props.showAddToCart === null ||
              props.showAddToCart !== false) && <Purchasable item={item} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

LineItem.propTypes = {
  item: PropTypes.object.isRequired,
  showAddToCart: PropTypes.bool
};

export function CheckoutLineItem({ item, quantity, ...props }) {
  const price = item["Price"];
  const totalPrice = price * quantity;
  const cartContext = useContext(CartContext);
  return (
    <div className="lineItem">
      <Container fluid={true}>
        <Row>
          <Col xs="12" md="4">
            <b>{item["Name"]}</b>
          </Col>
          <Col xs="12" md="2">
            {item["Code"]}
          </Col>
          <Col xs="12" md="2">
            {Formatter.format(price)}
          </Col>
          <Col xs="12" md="1">
            {quantity}
          </Col>
          <Col xs="12" md="2">
            {Formatter.format(totalPrice)}
          </Col>
          <Col xs="12" md="1">
            <Button
              color="danger"
              onClick={() => cartContext.removeFromCart(item)}
            >
              Remove
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
