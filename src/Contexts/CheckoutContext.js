import React, { useState, useContext } from "react";
import { CartContext } from "./Cart/CartContext";

export const CheckoutContext = React.createContext();

export function CheckoutContextProvider({ children, ...props }) {
  const cart = useContext(CartContext);
  const [shippingAddress, updateShippingAddress] = useState(null);
  const [billingAddress, updateBillingAddress] = useState(null);
  const [payment, updatePayment] = useState(null);
  const [comments, updateComments] = useState(null);

  function update(field, value) {
    switch (field) {
      case "shippingAddress": {
        updateShippingAddress(value);
        break;
      }
      case "billingAddress":
        updateBillingAddress(value);
        break;
      case "payment":
        updatePayment(value);
        break;
        case "comments":
          updateComments(value);
          break;
      default:
        break;
    }
  }

  function canPlaceOrder() {
    return (
      Boolean(Array.from(cart.items).length) &&
      Boolean(shippingAddress) &&
      Boolean(billingAddress) &&
      Boolean(payment)
    );
  }

  const initialState = {
    canPlaceOrder: canPlaceOrder,
    update: update,
    billingAddress: billingAddress,
    shippingAddress: shippingAddress,
    payment: payment,
    comments: comments
  };

  return (
    <CheckoutContext.Provider value={initialState}>
      {children}
    </CheckoutContext.Provider>
  );
}
