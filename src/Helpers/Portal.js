import React from "react";
import ReactDOM from "react-dom";

export default function Portal({ target, children, ...props }) {
  return target ? ReactDOM.createPortal(children, target) : null;
}
