import React from "react";
import { Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import { NotEmptyInput, IsEmailInput } from "../Shared/Inputs";

export function AccountInformationComponent({ ...props }) {
    return (
        <div className="registartion__account">
            <h3>Account Information</h3>
            <Form>
                <Row>
                    <Col xs="12" md="6">
                        <FormGroup>
                            <Label for="registartion__account--firstName">First Name*</Label>
                            <NotEmptyInput name="registartion__account--firstName" id="registartion__account--firstName" />
                        </FormGroup>

                    </Col>
                    <Col xs="12" md="6">
                        <FormGroup>
                            <Label for="registartion__account--lastName">Last Name*</Label>
                            <NotEmptyInput name="lastName" id="registartion__account--lastName" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <FormGroup>
                            <Label for="registartion__account--email">E-mail address</Label>
                            <IsEmailInput name="email" id="registartion__account--email" />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}