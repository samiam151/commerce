import React from "react";

export function RegistrationProgress({ context, ...props }) {
    return (
        <nav class="checkoutProgress">
            <ul class="checkoutProgress__ul">
                <li class={`checkoutProgress__item ${context.currentStep === 1 && "checkoutProgress__item--active"} `}>
                    <a href="/shopping-cart/">
                        <i class="fas fa-circle"></i>
                        <span>Account Information</span>
                    </a>
                </li>

                <li class={`checkoutProgress__item ${context.currentStep === 2 && "checkoutProgress__item--active"}`}>
                    <a href="/checkout2/">
                        <i class="fas fa-circle"></i>
                        <span>Shippping Information</span>
                    </a>
                </li>

                <li class={`checkoutProgress__item ${context.currentStep === 3 && "checkoutProgress__item--active"}`}>
                    <a href="/checkout2/">
                        <i class="fas fa-circle"></i>
                        <span>Confirm Account</span>
                    </a>
                </li>

            </ul>
        </nav>
    );
}
