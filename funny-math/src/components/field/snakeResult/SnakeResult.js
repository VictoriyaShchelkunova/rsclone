import React from "react";
import "./SnakeResult.css";
import { SnakeBody } from "./snakeBody/SnakeBody";

export const SnakeResult = () => {
    return (
        <div className="snake-wrapper">
            <div className="head-snake"></div>
            <SnakeBody />
        </div>
    )
}