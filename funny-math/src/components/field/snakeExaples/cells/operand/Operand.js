import React from "react";
import { firstOperands } from "../cell/getFirstOperands";
import "./Operand.css";


export const Operand = ({number, id, cell}) => {   
    let operandTextClass;
    let operandClass;
    if(id === 0 && cell === 0){ 
        operandTextClass = "first-operand";
        operandClass = "operand droppable first-operand"
    } else {
        operandTextClass = "text-hidden";
        operandClass = "operand droppable";
    }
    return (
        <div className={operandClass} >
            <span className={operandTextClass}>{number}</span>
        </div>
    )
}