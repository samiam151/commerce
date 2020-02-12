import React from "react";
import {Form, Input, Button, Label, InputGroupAddon, InputGroup } from "reactstrap";

export function TermsPayment({checkout, ...props}) {
  console.log(checkout);
  function submitPayment(e) {
    e.preventDefault();
    e.stopPropagation();
    checkout.update("payment", {
      type: "terms",
      value: e.target.value
    })
  }
  return (
    <Form onSubmit={(e) => submitPayment(e)} onChange={e => e.stopPropagation()}>
      <InputGroup>
        <Input type="text" />
        <InputGroupAddon addonType="append">
          <Button type="submit">Add Payment</Button>
          </InputGroupAddon>        
      </InputGroup>
    </Form>
  );
}
