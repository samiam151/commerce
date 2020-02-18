import React, { useState, Children } from "react";
import { Input, FormGroup, Label } from "reactstrap";

export function Choose({ options, ...props }) {
  const optionsMap = options.map((option, index) => {
    option["id"] = index;
    return option;
  });
  const [optionSelected, chooseOption] = useState(optionsMap[0]);
  const formID = Math.round(Math.random() * 10000);

  function handleChange(event) {
    event.stopPropagation();
    let target = event.target;
    let selectedOption = optionsMap[target.dataset.index];
    chooseOption(selectedOption);
  }

  return (
    <div className="choose__component" onChange={e => handleChange(e)}>
      <div className="choose__options">
        <FormGroup tag="fieldset">
          {optionsMap.map((option, index) => {
            return (
              <FormGroup check key={`chooseGroup-${index}`}>
                <Label check>
                  <Input
                    type="radio"
                    name={`option${index}--${formID}`}
                    data-index={index}
                    defaultChecked={optionSelected["id"] === index}
                  />{" "}
                  {option["label"]}
                </Label>
              </FormGroup>
            );
          })}
        </FormGroup>
      </div>
      <div className="choose__content">
        {React.cloneElement(optionSelected["content"])}
      </div>
    </div>
  );
}
