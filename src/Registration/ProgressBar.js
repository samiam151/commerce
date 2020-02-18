import React from "react";

export function RegistrationProgress({ context, ...props }) {
    return (
        <nav className="checkoutProgress">
            <ul className="checkoutProgress__ul">
                <li className={`checkoutProgress__item ${context.currentStep === 1 && "checkoutProgress__item--active"} `}>
                    <a href="#" onClick={(e) => {
                        e.preventDefault();
                        context.setCurrentStep(1)
                    }}>
                        <i className="fas fa-circle"></i>
                        <span>Account Information</span>
                    </a>
                </li>

                <li className={`checkoutProgress__item ${context.currentStep === 2 && "checkoutProgress__item--active"}`}>
                    <a href="#" onClick={(e) => {
                        e.preventDefault();
                        context.setCurrentStep(2)
                    }}>
                        <i className="fas fa-circle"></i>
                        <span>Shippping Information</span>
                    </a>
                </li>

                <li className={`checkoutProgress__item ${context.currentStep === 3 && "checkoutProgress__item--active"}`}>
                    <a href="#" onClick={(e) => {
                        e.preventDefault();
                        context.setCurrentStep(3)
                    }}>
                        <i className="fas fa-circle"></i>
                        <span>Confirm Account</span>
                    </a>
                </li>

            </ul>
        </nav>
    );
}
