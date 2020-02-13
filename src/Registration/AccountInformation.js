import React from "react";
import { Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import { NotEmptyInput, IsEmailInput } from "../Shared/Inputs";

export function AccountInformationComponent({ ...props }) {
    return (
        <div className="registartion__account">
            <h3>Account Information</h3>
            <Form>
                <Row>
                    <RegGroup>
                        <Label for="registartion__account--firstName">First Name*</Label>
                        <NotEmptyInput required className="registartion__account--firstName" name="registartion__account--firstName" id="registartion__account--firstName" />
                    </RegGroup>
                    <RegGroup>
                        <Label for="registartion__account--lastName">Last Name*</Label>
                        <NotEmptyInput required className="registartion__account--lastName" name="registartion__account--lastName" id="registartion__account--lastName" />
                    </RegGroup>
                </Row>
                <Row>
                    <RegGroup>
                        <Label for="registartion__account--email">E-mail address</Label>
                        <IsEmailInput className="registartion__account--email" name="registartion__account--email" id="registartion__account--email" />
                    </RegGroup>
                </Row>
                <Row>
                    <RegGroup>
                        <Label for="registartion__account--password">Password*</Label>
                        <NotEmptyInput required type="password" className="registartion__account--password" name="registartion__account--password" id="registartion__account--password" />
                    </RegGroup>
                    <RegGroup>
                        <Label for="registartion__account--reenterPassword">Re-enter Password*</Label>
                        <NotEmptyInput required type="password" className="registartion__account--reenterPassword" name="registartion__account--reenterPassword" id="registartion__account--reenterPassword" />
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