import React, { Fragment } from "react";

export default function Property({ label, value, ...props }) {
  return (
    <Fragment>
      <div className="property">
        <span>
          <b>{label}: </b>
        </span>
        <span>{value}</span>
      </div>
    </Fragment>
  );
}
