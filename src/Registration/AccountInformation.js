import React from "react";
import { Form, FormGroup, Label, Input, Col, Row, Button } from "reactstrap";
import { NotEmptyInput, IsEmailInput } from "../Shared/Inputs";
import { Form as FormHelper } from "../Helpers/Functions";

export function AccountInformationComponent({context,  ...props }) {
    function submitForm(e) {
        e.preventDefault();
        e.stopPropagation();
        let form = e.target;
        let formData = FormHelper.serialize(form);
        console.log(formData);
        context.setAccountInformation(formData)
        context.continueRegistrationPage();
    }

    return (
        <div className="registartion__account">
            <h3>Account Information</h3>
            <Form onSubmit={e => submitForm(e)}>
                <Row>
                    <RegGroup>
                        <Label for="registartion__account--firstName">First Name*</Label>
                        <NotEmptyInput required className="registartion__account--firstName" name="firstName" id="registartion__account--firstName" />
                    </RegGroup>
                    <RegGroup>
                        <Label for="registartion__account--lastName">Last Name*</Label>
                        <NotEmptyInput required className="registartion__account--lastName" name="lastName" id="registartion__account--lastName" />
                    </RegGroup>
                </Row>
                <Row>
                    <RegGroup>
                        <Label for="registartion__account--email">E-mail address</Label>
                        <IsEmailInput className="registartion__account--email" name="email" id="registartion__account--email" />
                    </RegGroup>
                </Row>
                <Row>
                    <RegGroup>
                        <Label for="registartion__account--password">Password*</Label>
                        <NotEmptyInput required type="password" className="registartion__account--password" name="password" id="registartion__account--password" />
                    </RegGroup>
                    <RegGroup>
                        <Label for="registartion__account--reenterPassword">Re-enter Password*</Label>
                        <NotEmptyInput required type="password" className="registartion__account--reenterPassword" name="reenterPassword" id="registartion__account--reenterPassword" />
                    </RegGroup>
                </Row>
                <Row>
                    <RegGroup>
                        { context.currentStep !== 1 && <Button>Back</Button> }
                        { context.currentStep !== 3 && <Button type="submit">Continue</Button> }
                    </RegGroup>
                </Row>
            </Form>
        </div>
    );
}

function RegGroup({ children, ...props }) {
    return (
        <Col xs="12" md="6">
            <FormGroup>
                {children}
            </FormGroup>
        </Col>
    );
}