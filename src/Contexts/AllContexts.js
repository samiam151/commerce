import React, { useContext } from "react";
import { CartContextProvider } from "./Cart/CartContext";
import { SearchableContextProvider } from "./Searchable/SearchableContext";
import { UserContextProvider } from "./User/UserContext";

export function Contexts({ children, ...props }) {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <SearchableContextProvider>{children}</SearchableContextProvider>
      </CartContextProvider>
    </UserContextProvider>
  );
}

export const withContexts = (Component, contextsObj) => {
  return function({ children, ...props }) {
    const contexts = Object.keys(contextsObj).reduce((obj, contextName) => {
      obj[contextName] = useContext(contextsObj[contextName]);
      return obj;
    }, {});
    return (
      <Component {...contexts} {...props}>
        {children}
      </Component>
    );
  };
};
