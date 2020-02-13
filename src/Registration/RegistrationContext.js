import React, { useState } from "react";

export const RegistrationContext = React.createContext();
export function RegistrationContextProvider({children, ...props}) {
    const [currentStep, setCurrentStep] = useState(1);
    
    function continueRegistrationPage() {
        if (currentStep === 3) return;
        setCurrentStep(currentStep + 1);
    }

    function previousRegistrationPage() {
        if (currentStep === 1) return;
        setCurrentStep(currentStep - 1);
    }

    const initialState = {
        currentStep: currentStep,
        continueRegistrationPage: continueRegistrationPage,
        previousRegistrationPage: previousRegistrationPage
    };

    return (
        <RegistrationContext.Provider value={initialState}>
            {children}
        </RegistrationContext.Provider>
    );
}