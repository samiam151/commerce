import React, { useState, useEffect, Fragment } from "react";
import AddToCart from "../../Shared/AddToCart";
import { PurchableContextProvider } from "./PurchasableContext";
import { CartContextProvider } from "../Cart/CartContext";
import { withContexts } from "../AllContexts";
import { UserContext } from "../User/UserContext";

function Purchasable({ user, item, ...props }) {
  return (
    <Fragment>
      <PurchableContextProvider>
        {user.activeUser !== null ? <AddToCart item={item} /> : <noscript />}
      </PurchableContextProvider>
    </Fragment>
  );
}

export default withContexts(Purchasable, {
  user: UserContext
});
