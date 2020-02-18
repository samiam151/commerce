import React, { useState, useEffect, Fragment } from "react";
import { CheckoutLineItem } from "../Shared/LineItem";

export function CheckoutLinetems({ items, ...props }) {
  const [citems, setCitems] = useState(processItems(items));
  useEffect(() => {
    setCitems(processItems(items));
  }, [items]);

  function processItems(items) {
    return Array.from(items);
  }
  return (
    <Fragment>
      <h3>Checkout Items</h3>
      {citems.map((item, index) => (
        <CheckoutLineItem
          key={`checkoutItem-${index}`}
          item={item[0]}
          quantity={item[1]}
          showAddToCart={false}
        />
      ))}
    </Fragment>
  );
}
