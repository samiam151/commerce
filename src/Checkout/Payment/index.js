import React from "react";
import { withContexts } from "../../Contexts/AllContexts";
import { CartContext } from "../../Contexts/Cart/CartContext";
import { CheckoutContext } from "../../Contexts/CheckoutContext";
import { Choose } from "../../Shared/Choose";
import { Alert } from "reactstrap";

import { TermsPayment } from "./Terms";
import { CreditCardPayment } from "./CreditCard";

function _PaymentComponent({checkout, ...props}) {
    console.log(checkout, props);
    return (
        <div className="checkout__payment">
            <h3>Payment Method</h3>
            {Boolean(checkout.payment) && <Alert color="success">Payment method has been set.</Alert>}
            <Choose options={[
                {
                    label: "Terms",
                    content: <TermsPayment {...props} />
                },
                {
                    label: "Credit Card",
                    content: <CreditCardPayment {...props} />
                }
            ]} />
        </div>
    );
}


export default withContexts(_PaymentComponent, {
    cart: CartContext,
    checkout: CheckoutContext
});