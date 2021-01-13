import React from "react";

export const Timer = ({ minutes, seconds }) => {
    let min = minutes;
    let sec = seconds;
    
    if(min < 10) min = `0${minutes}:`;
    if(sec < 10) sec = `0${seconds}`;
    return (
        <>
            <span>{min}</span>
            <span>{sec}</span>
        </>
    )
}