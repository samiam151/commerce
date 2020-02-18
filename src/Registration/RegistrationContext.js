import React, { useState } from "react";

export const RegistrationContext = React.createContext();
export function RegistrationContextProvider({children, ...props}) {
    const [currentStep, setCurrentStep] = useState(1);
    const [accountInformation, setAccountInformation] = useState(null);
    const [shippingInformation, setShippingInformation] = useState(null);
    const [companyInformation, setCompanyInformation] = useState(null);
    
    function continueRegistrationPage() {
        if (currentStep === 3) return;
        setCurrentStep(currentStep + 1);
    }

    function previousRegistrationPage() {
        if (currentStep === 1) return;
        setCurrentStep(currentStep - 1);
    }

    return (
        <RegistrationContext.Provider value={{
            currentStep: currentStep,
            setCurrentStep: setCurrentStep,
            continueRegistrationPage: continueRegistrationPage,
            previousRegistrationPage: previousRegistrationPage,
            setAccountInformation: setAccountInformation,
            setCompanyInformation: setCompanyInformation,
            setShippingInformation: setShippingInformation,
            accountInformation: accountInformation,
            shippingInformation: shippingInformation,
            companyInformation: companyInformation
        }}>{children}</RegistrationContext.Provider>
    );
}