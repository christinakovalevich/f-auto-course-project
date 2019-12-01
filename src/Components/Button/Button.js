import React from "react";

import './Button.css'

const Button = (props) => {

    const {label, onClick, href} = props;

    const element = (href && href !== '') ? (
        <a className="button"
           href={href}>{label}</a>
    ) : (
        <button
            className="button"
            onClick={onClick}>{label}
        </button>
    );

    return (
        element
    )
};

export default Button