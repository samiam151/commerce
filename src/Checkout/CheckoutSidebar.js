import React, { Fragment } from "react";
import { Formatter } from "../Helpers/Functions";
import { Button, Card, CardTitle, CardBody, CardText } from "reactstrap";

export function CheckoutSidebar({ total, ...props }) {
  return (
    <Fragment>
      <Card>
        <CardBody>
          <CardTitle>
            <h3>Order Summary</h3>
          </CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          <CardText>
            There is no tax here. You can place the order when all checkout
            fields are populated.
          </CardText>
          <div className="oneCheckout--sidebar">
            <p>
              <b>Subtotal:</b> {Formatter.format(total)}
            </p>
            <p>
              <b>Total Price:</b> {Formatter.format(total)}
            </p>
          </div>
          {props.canCheckout && (
            <Fragment>
              <br />
              <Button block color="success">
                Place Order
              </Button>
            </Fragment>
          )}
        </CardBody>
      </Card>
    </Fragment>
  );
}
