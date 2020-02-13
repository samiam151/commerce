import React, { Fragment } from "react";
import { Button } from "reactstrap";
import { withContexts } from "../Contexts/AllContexts";
import { UserContext } from "../Contexts/User/UserContext";
import { RegistrationContext, RegistrationContextProvider } from "./RegistrationContext";
import { AccountInformationComponent } from "./AccountInformation";
import { ShipppingInformationComponent } from "./ShippingInformation";
import { ConfirmAccountComponent } from "./ConfirmAccount";
import { RegistrationProgress } from "./ProgressBar";

function _RegistrationComponent({ registration, ...props }) {
    return (
        <Fragment>
            <RegistrationProgress context={registration} />
            <div className="registrationComponent">
                <div className="registrationComponent__container">
                    { registration.currentStep === 1 && <AccountInformationComponent /> }
                    { registration.currentStep === 2 && <ShipppingInformationComponent /> }
                    { registration.currentStep === 3 && <ConfirmAccountComponent /> }
                    { registration.currentStep !== 1 && <Button onClick={registration.previousRegistrationPage}>Back</Button> }
                    { registration.currentStep !== 3 && <Button onClick={registration.continueRegistrationPage}>Continue</Button> }
                </div>
            </div>
        </Fragment>
    );
}

export const RegistrationComponent = withContexts(_RegistrationComponent, {
    user: UserContext,
    registration: RegistrationContext
});

export function RegistrationPage(props) {
    return (
        <div className="registration">
            <h2>Register</h2>
            <p>Have you ordered from us in the past? If so, welcome back, go ahead and start shopping by going to the Login page and entering your account number under Existing Customers. Please note that we review all new account registrations to verify that they are a good fit for our business. Read our Online Reseller Policy.</p>
            <RegistrationContextProvider>
                <RegistrationComponent />
            </RegistrationContextProvider>
        </div>
    );
}