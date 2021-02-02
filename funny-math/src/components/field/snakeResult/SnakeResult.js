import React from "react";
import "./SnakeResult.css";
import SnakeBody from "./snakeBody/SnakeBody";

export const SnakeResult = () => {
    return (
        <div className="snake-result-block" style={{backgroundImage: "url(assets/images/grow.png)"}}>
            <div className="snake-wrapper">
                <div className="head-snake">
                    <img src="assets/images/headSnake.png" alt="head-snake" />
                </div>
                <SnakeBody />
            </div>
        </div>

    )
}