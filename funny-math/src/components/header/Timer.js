import React from "react";
import { connect } from "react-redux";
import { saveTime } from "../../actions";

const Timer = ({ minutes, seconds, saveTime }) => {
    let min = minutes;
    let sec = seconds;

    if (min < 10) min = `0${minutes}:`;
    if (sec < 10) sec = `0${seconds}`;
    saveTime();
    return (
        <>
            <span>{min}</span>
            <span>{sec}</span>
        </>
    )
}

function mapDispatchToProps(dispatch, {minutes, seconds}) {
    return {
        saveTime: () => dispatch(saveTime({minutes, seconds}))
    }
}

export default connect(null, mapDispatchToProps)(Timer);