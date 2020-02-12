import React, { Fragment } from "react";
import {
  FormFeedback,
  Input,
  Label,
  FormGroup,
  Row,
  Col,
  Form,
  Button,
  Alert
} from "reactstrap";
import { withContexts } from "../Contexts/AllContexts";
import { CheckoutContext } from "../Contexts/CheckoutContext";
import { UserContext } from "../Contexts/User/UserContext";
import { Choose } from "../Shared/Choose";

export const CheckoutAddress = withContexts(CheckoutAddressComponent, {
  checkout: CheckoutContext,
  user: UserContext
});

function CheckoutAddressComponent({ checkout, user, isValid, ...props }) {
  return (
    <Fragment>
      <h3>{props.title}</h3>
      {isValid && <Alert color="success">Address has been set.</Alert>}
      {user.activeUser.addresses[props.type].length > 0 ? (
        <ChooseAddressComponent checkout={checkout} user={user} {...props} />
      ) : (
          <AddressComponent {...props} />
        )}
    </Fragment>
  );
}

function ChooseAddressComponent({ user, checkout, ...props }) {

  return (
    <Choose
      options={[
        {
          label: "Default Address",
          content: <div>
            <Button onClick={() => checkout.update(
              `${props.type}Address`, 
              user.activeUser.addresses[props.type][0]
              )}>Use Default Address</Button>
          </div>
        },
        {
          label: "Create Another Address",
          content: <AddressComponent {...props} />
        }
      ]}
    />
  );
}

export function AddressComponent({ callback, ...props }) {
  return (
    <div className="address">

      <Form onSubmit={callback} onChange={e => e.stopPropagation()}>
        <Row>
          <Col xs="12" md="6">
            <FormGroup>
              <Label for="address-fname">First Name</Label>
              <Input type="text" id="address-fname" name="address-fname" />
            </FormGroup>
          </Col>
          <Col xs="12" md="6">
            <FormGroup>
              <Label for="address-lname">Last Name</Label>
              <Input
                type="text"
                required
                id="address-lname"
                name="address-lname"
              />
              <FormFeedback>This input is invalid</FormFeedback>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <FormGroup>
              <Label for="address-adress1">Address 1</Label>
              <Input type="text" id="address-adress1" name="address-adress1" />
            </FormGroup>
          </Col>
          <Col xs="12" md="6">
            <FormGroup>
              <Label for="address-adress2">Address 2</Label>
              <Input type="text" id="address-adress2" name="address-adress2" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <FormGroup>
              <Label for="address-city">City</Label>
              <Input type="text" id="address-city" name="address-city" />
            </FormGroup>
          </Col>
          <Col xs="12" md="6">
            <FormGroup>
              <Label for="address-state">State</Label>
              <Input type="text" id="address-state" name="address-state" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <FormGroup>
              <Label for="address-zipCode">Zip Code</Label>
              <Input type="text" id="address-zipCode" name="address-zipCode" />
            </FormGroup>
          </Col>
          <Col xs="12" md="6">
            <FormGroup>
              <Button type="submit">Submit</Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
