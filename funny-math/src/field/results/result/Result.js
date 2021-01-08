import React from "react";
import './Result.css';
import { shuffleResults } from "./getResults";

export const Result = () => {
    const result = [];
    for (let i = 0; i < 11; i++) {
        result.push(<div className="result" key={i}>
            <span>{shuffleResults[i]}</span>
        </div>);
    }
    return result;
}