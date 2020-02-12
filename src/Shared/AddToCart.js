import React, { Fragment, useContext, useState } from "react";
import { Input, Button, Alert } from "reactstrap";
import { PurchasableContext } from "../Contexts/Purchasable/PurchasableContext";
import { CartContext } from "../Contexts/Cart/CartContext";

export default function AddToCart({ item, ...props }) {
  const context = useContext(PurchasableContext);
  const cartContext = useContext(CartContext);
  const [quantity, setQuantity] = useState(item["MinQuantity"]);

  return (
    <Fragment>
      {cartContext.items.has(item) && (
        <Alert type="success">Added to Cart!</Alert>
      )}
      <Input
        type="number"
        data-code={item["Code"]}
        min={item["MinQuantity"] > 0 ? item["MinQuantity"] : 1}
        defaultValue={quantity}
        onChange={e => setQuantity(e.target.value)}
      />
      <Button
        className="addToCart"
        data-code={item["Code"]}
        onClick={() => context.addToCart(item, quantity)}
      >
        Add To Cart
      </Button>
    </Fragment>
  );
}
