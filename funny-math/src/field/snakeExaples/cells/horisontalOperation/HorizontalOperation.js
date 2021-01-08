import React from "react";
import "./HorizontalOperation.css";

export const HorizontalOperation = ({operation}) => {
    return (
        <div className="horizontal-operation">
            <span>{operation}</span>
        </div>
    )
}