import React, { Fragment } from "react";
import { Choose } from "../Shared/Choose";

export default function PracticePage({ ...props }) {
  return (
    <Fragment>
      <h3>Practice Page</h3>
      <hr />
      <h3>
        <code>Choose</code> Component
      </h3>
      <Choose
        options={[
          {
            label: "First or Default Option",
            content: <div>Default option DIV</div>
          },
          {
            label: "Second Option",
            content: <div>Content for the second option</div>
          },
          {
            label: "Third Option",
            content: <div>Content for the third option</div>
          }
        ]}
      />
    </Fragment>
  );
}
