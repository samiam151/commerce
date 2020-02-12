import React, { useState } from "react";

export const CartContext = React.createContext();

export function CartContextProvider({ children, ...props }) {
  const [items, setItems] = useState(new Map());

  function addItemsToCart(product, quantity) {
    let newItems = new Map(items);
    if (!newItems.has(product)) {
      // Add new Item
      newItems.set(product, +quantity);
    } else {
      // Adjust quantity
      let oldQuantity = newItems.get(product);
      newItems.set(product, oldQuantity + +quantity);
    }
    setItems(newItems);
  }

  function clearCart() {
    setItems(new Map());
  }

  function cartCount() {
    return Array.from(items).reduce((sum, item) => {
      let [product, quantity] = item;
      return (sum += quantity);
    }, 0);
  }

  function removeFromCart(product) {
    let newItems = new Map(items);
    newItems.has(product) && newItems.delete(product);
    setItems(newItems);
  }

  function totalCartPrice() {
    return Array.from(items).reduce((sum, item) => {
      let [product, quantity] = item;
      return sum + product["Price"] * quantity;
    }, 0);
  }

  const initialState = {
    items: items,
    addItemsToCart: addItemsToCart,
    removeFromCart: removeFromCart,
    clearCart: clearCart,
    count: cartCount,
    total: totalCartPrice
  };

  return (
    <CartContext.Provider value={initialState}>{children}</CartContext.Provider>
  );
}
