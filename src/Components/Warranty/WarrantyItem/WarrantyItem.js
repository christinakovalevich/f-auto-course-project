import React from "react";
import './WarrantyItem.css'

const WarrantyItem = (props) => {
    const {days, text} = props;

    return (
        <div className="warranty-item">
            <div>
                <span className="days">{days}<span className="label">дней</span></span>
            </div>
            <div>
                <span className="text">{text}</span>
            </div>
        </div>
    )
};

export default WarrantyItem