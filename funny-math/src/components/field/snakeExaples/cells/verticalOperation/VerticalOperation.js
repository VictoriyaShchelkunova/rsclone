import React from "react";
import "./VerticalOperation.css";

export const Operation = ({operation}) => {
    return (
        <div className="operation">
            <span>{operation}</span>
        </div>
    )
}