import React from "react";
import "./Operand.css";


export const Operand = ({number}) => {
   
    return (
        <div className="operand droppable" >
            <span>{number}</span>
        </div>
    )
}