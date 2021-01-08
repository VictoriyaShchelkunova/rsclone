import React from "react";
import './Snake.css';
import { Rows } from "./cells/row/Row";

export const Snake = () => {
    return (
        <div className="wrapper-snake-examples">
            <Rows />
        </div>
    )
}