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
        invert(validator.isEmail),
        validator.isEmpty
    ]} {...props} />
}

export function BaseInput({ validators, ...props }) {
    const [value, setValue] = useState(props.initValue || "");
    const [hasError, setHasError] = useState(false);
    function handleChange(e) {
        let value = e.target.value;
        //console.log(value);
        setValue(value);
        let _hasError = false;
        validators.forEach(val => {
            if (val(value)) {
                _hasError = true
            }
        });
        _hasError && setHasError(true)
    }

    return (
        <Fragment>
            <Input 
                type={props.type || "text"}
                className={props.className || ""}
                required={props.required || false}
                defaultValue={value}
                name={props.name || ""}
                id={props.id || ""}
                onChange={handleChange}
                invalid={Boolean(hasError)}
            />
        </Fragment>
    );
}

function invert(func) {
    return function(...args){
        return !func(...args);
    }
}