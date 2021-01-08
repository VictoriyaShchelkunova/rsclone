import React from "react";
import "./Operand.css";


export const Operand = ({number}) => {
    return (
        <div className="operand">
            <span>{number}</span>
        </div>
    )
}