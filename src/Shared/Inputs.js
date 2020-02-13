import React, { useState, Fragment } from "react";
import { Input } from "reactstrap";
import validator from "validator";

export function NotEmptyInput(props) {
    return <BaseInput validators={[
        validator.isEmpty
    ]} {...props} />
}

export function IsEmailInput(props) {
    return <BaseInput validators={[
        validator.isEmail,
        validator.isEmpty
    ]} {...props} />
}

export function BaseInput({validators, ...props}) {
    const [value, setValue] = useState(props.initValue || "");
    const [hasError, setHasError] = useState(false);

    function handleChange(e) {
        let value = e.target.value;
        setValue(value);
        validators.forEach(val => {
            if(val(value) && !hasError) {
                setHasError(true)                
            }
        })
    }

    return (
        <Fragment>
            <Input type="email" 
                defaultValue={value} 
                name={props.name || ""} 
                id={props.id || ""}
                onChange={handleChange}
                invalid={Boolean(hasError)}
            />
        </Fragment>
    );
}