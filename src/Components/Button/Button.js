import React from "react";

import './Button.css'

const Button = (props) => {

    const {label, onClick} = props;

    return (
        <button className="button" onClick={() => onClick(this.event)}>
            {label}
        </button>
    )
};

export default Button