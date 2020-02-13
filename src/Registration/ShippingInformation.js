import React from "react";
import { Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import { NotEmptyInput, IsEmailInput } from "../Shared/Inputs";

export function ShipppingInformationComponent({ ...props }) {
    return (
        <div className="registartion__shipping">
            <h3>Company Information</h3>
            <Form>
                <Row>
                    <Col xs="12" md="6">
                        <FormGroup>
                            <Label for="registartion__shipping--company">First Name*</Label>
                            <NotEmptyInput required className="registartion__shipping--company" name="registartion__shipping--company" id="registartion__shipping--company" />
                        </FormGroup>

                    </Col>
                    <Col xs="12" md="6">
                        <FormGroup>
                            <Label for="registartion__shipping--website">Last Name*</Label>
                            <NotEmptyInput className="registartion__shipping--website" name="registartion__shipping--website" id="registartion__shipping--website" />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
            <br />
            <h3>Shipping Information</h3>
            <Form>
                <Row>
                    <Col xs="12" md="6">
                        <FormGroup>
                            <Label for="registartion__shipping--firstName">First Name*</Label>
                            <NotEmptyInput required className="registartion__shipping--firstName" name="registartion__shipping--firstName" id="registartion__shipping--firstName" />
                        </FormGroup>

                    </Col>
                    <Col xs="12" md="6">
                        <FormGroup>
                            <Label for="registartion__shipping--lastName">Last Name*</Label>
                            <NotEmptyInput className="registartion__shipping--lastName" name="registartion__shipping--lastName" id="registartion__shipping--lastName" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <FormGroup>
                            <Label for="registartion__shipping--address1">Address 1*</Label>
                            <NotEmptyInput required className="registartion__shipping--address1" name="registartion__shipping--address1" id="registartion__shipping--address1" />
                        </FormGroup>

                    </Col>
                    <Col xs="12" md="6">
                        <FormGroup>
                            <Label for="registartion__shipping--addressType">Address Type*</Label>
                            <NotEmptyInput className="registartion__shipping--addressType" name="registartion__shipping--addressType" id="registartion__shipping--addressType" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <FormGroup>
                            <Label for="registartion__shipping--address2">Address 2*</Label>
                            <NotEmptyInput required className="registartion__shipping--address2" name="registartion__shipping--address2" id="registartion__shipping--address2" />
                        </FormGroup>

                    </Col>
                    <Col xs="12" md="6">
                        <FormGroup>
                            <Label for="registartion__shipping--suite">Suite</Label>
                            <NotEmptyInput className="registartion__shipping--suite" name="registartion__shipping--suite" id="registartion__shipping--suite" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <FormGroup>
                            <Label for="registartion__shipping--company">Country</Label>
                            <NotEmptyInput required className="registartion__shipping--company" name="registartion__shipping--company" id="registartion__shipping--company" />
                        </FormGroup>

                    </Col>
                    <Col xs="12" md="6">
                        <FormGroup>
                            <Label for="registartion__shipping--website">State</Label>
                            <NotEmptyInput className="registartion__shipping--website" name="registartion__shipping--website" id="registartion__shipping--website" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <FormGroup>
                            <Label for="registartion__shipping--city">City or ApO/AFO*</Label>
                            <NotEmptyInput required className="registartion__shipping--city" name="registartion__shipping--city" id="registartion__shipping--city" />
                        </FormGroup>

                    </Col>
                    <Col xs="12" md="6">
                        <FormGroup>
                            <Label for="registartion__shipping--zipCode">City or ApO/AFO*</Label>
                            <NotEmptyInput className="registartion__shipping--zipCode" name="registartion__shipping--zipCode" id="registartion__shipping--zipCode" />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}