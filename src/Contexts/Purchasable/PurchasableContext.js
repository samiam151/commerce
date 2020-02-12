import React, { Fragment, useState, useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import AddToCart from "../../Shared/AddToCart";

export const PurchasableContext = React.createContext();

export function PurchableContextProvider(props) {
  const cartContext = useContext(CartContext);
  return (
    <PurchasableContext.Provider
      value={{
        addToCart: function(product, quantity) {
          console.log(`Adding ${quantity} ${product["Name"]} to cart...`);
          cartContext.addItemsToCart(product, quantity);
        }
      }}
    >
      {props.children}
    </PurchasableContext.Provider>
  );
}

export default function Purchasable({ item, ...props }) {
  return (
    <Fragment>
      <PurchableContextProvider product={item}>
        <AddToCart item={item} />
      </PurchableContextProvider>
    </Fragment>
  );
}
