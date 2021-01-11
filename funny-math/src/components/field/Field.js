import React from "react";
import { Results } from "./results/Results";
import {Snake} from "./snakeExaples/Snake";
import { SnakeResult } from "./snakeResult/SnakeResult";

export const Field = () => {
    return (
        <div className="field">
            <Results />
            <Snake />
            <SnakeResult />
        </div>
    )
}