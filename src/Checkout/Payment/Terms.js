import React, { useState } from "react";
import {Form, Input, Button, InputGroupAddon, InputGroup } from "reactstrap";

export function TermsPayment({checkout, ...props}) {
  const [value, setValue] = useState("");

  function submitPayment(e) {
    e.preventDefault();
    e.stopPropagation();
    if (value.length) {
      checkout.update("payment", {
        type: "terms",
        value: value
      })
    }
  }
  return (
    <Form onSubmit={(e) => submitPayment(e)} onChange={e => e.stopPropagation()}>
      <InputGroup>
        <Input type="text" onChange={e => setValue(e.target.value)}/>
        <InputGroupAddon addonType="append">
          <Button type="submit">Add Payment</Button>
          </InputGroupAddon>        
      </InputGroup>
    </Form>
  );
}
