import React from "react";
import "./Row.css";
import  Cell  from "../cell/Cell";

export const Rows = () => {
    const rows = [];
    let indexOperand = 0;
    let indexOperation = 0;
    for (let i = 0; i < 5; i++) {
        rows.push(<div className="row" key={i}>
            <Cell parity={i} indexOperand={indexOperand} indexOperation={indexOperation}/>
        </div>);
        if(!(i % 2)) indexOperand += 4;
        if(i % 2) indexOperation += 4;
    }
    return rows;
}