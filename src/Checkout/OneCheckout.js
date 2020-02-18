import React, { useState, useContext, useEffect, Fragment } from "react";
import { CartContext } from "../Contexts/Cart/CartContext";
import { UserContext } from "../Contexts/User/UserContext";
import { withContexts } from "../Contexts/AllContexts";
import {
  CheckoutContext,
  CheckoutContextProvider
} from "../Contexts/CheckoutContext";
import { Row, Col } from "reactstrap";

import { Redirect } from "react-router";
import { Address } from "../Addresses/Address";
import { CheckoutAddress } from "../Addresses/AddressComponent";
import { CheckoutLinetems } from "./CheckoutLineItems";
import { CheckoutSidebar } from "./CheckoutSidebar";
import Payment from "./Payment";
import { Form } from "../Helpers/Functions";

export function CheckoutPage(props) {
  return (
    <CheckoutContextProvider>
      <OneCheckout />
    </CheckoutContextProvider>
  );
}

function OneCheckoutComponent({ user, cart, checkout, ...props }) {
  function shippingAddressCallback(e) {
    e.preventDefault();
    e.stopPropagation();
    let form = e.target;
    if (form.checkValidity()) {
      let data = Form.serialize(form);
      let address = new Address();
      address.populateAddress(
        data["address-fname"],
        data["address-lname"],
        data["address-adress1"],
        data["address-adress2"],
        data["address-city"],
        data["address-state"],
        data["address-zipCode"]
      );
      checkout.update("shippingAddress", address);
    }
  }

  function billingAddressCallback(e) {
    e.preventDefault();
    e.stopPropagation();
    let form = e.target;
    if (form.checkValidity()) {
      let data = Form.serialize(form);
      let address = new Address();
      address.populateAddress(
        data["address-fname"],
        data["address-lname"],
        data["address-adress1"],
        data["address-adress2"],
        data["address-city"],
        data["address-state"],
        data["address-zipCode"]
      );
      checkout.update("billingAddress", address);
    }
  }

  return user.activeUser === null ? (
    <Redirect to="log-in" />
  ) : (
    <div className="oneCheckout">
      <h2>Checkout</h2>
      <Row>
        <Col xs={12} md={8}>
          <hr />
          <CheckoutAddress
            type="shipping"
            title="Shipping Address"
            isValid={Boolean(checkout.shippingAddress)}
            callback={shippingAddressCallback}
          />
          <hr />
          <CheckoutAddress
            type="billing"
            title="Billing Address"
            isValid={Boolean(checkout.billingAddress)}
            callback={billingAddressCallback}
          />
          <hr />
          <Payment />
          <hr />
          <CheckoutLinetems items={cart.items} />
        </Col>
        <Col xs={12} md={{ size: 3, offset: 1 }} offset-md={1}>
          <CheckoutSidebar
            canCheckout={checkout.canPlaceOrder()}
            total={cart.total()}
          />
        </Col>
      </Row>
    </div>
  );
}

export const OneCheckout = withContexts(OneCheckoutComponent, {
  cart: CartContext,
  user: UserContext,
  checkout: CheckoutContext
});
