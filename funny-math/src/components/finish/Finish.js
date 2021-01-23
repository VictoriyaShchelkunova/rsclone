import React from "react";
import "./Finish.css";
import { connect } from "react-redux";
import { Bonus } from "./Bonus";
import { replayGame, backToLevelesPage } from "../../actions";
const Finish = ({ isFinish, mistakes, time, replay, backToLevelesPage}) => {

    const message = {
        imgSrc: "", bonus: 0, textMessage: "",
        mistakes: mistakes, visibleFinish: "none",
        time: { min: "", sec: "" }
    }

    if (isFinish) {
        let minutes = time.min;
        let seconds = time.sec;
        message.time.min = (minutes < 10) ? `0${minutes}:` : minutes;
        message.time.sec = (seconds < 10) ? `0${seconds}` : seconds;
        if (mistakes > 3) {
            message.imgSrc = "assets/images/faild.png";
            message.textMessage = "Mission Faild :(";
            const faild = new Audio("assets/sounds/looser.wav");
            faild.play();
        } else {
            message.imgSrc = "assets/images/complete.png";
            message.textMessage = "Mission Complete!";
            if (mistakes === 2) {
                message.bonus = 1;
            } else if (mistakes === 1) {
                message.bonus = 2;
            } else if (mistakes === 0) {
                message.bonus = 3;
            }
            const complete = new Audio("assets/sounds/winner.m4a");
            complete.play();
        }
    };

    const replayButtonHandler = () => {
        replay();
    }

    const closeButtonHandler = () => {
        backToLevelesPage();
    }

    return (
        <div className="finish-block" style={(isFinish) ? { display: "flex" } : { display: "none" }}>

            <div className="wrapper-block">
                <div className="message-block">
                    <div className="images">
                        <img src="assets/images/arrow-repeat.png" alt="arrow" id="arrow" title="Replay" onClick={replayButtonHandler}/>
                        <img src={message.imgSrc} alt="" />
                        <img src="assets/images/close-menu.png" alt="close" id="close-window" onClick={closeButtonHandler}/>
                    </div>
                    <p>{message.textMessage}</p>
                    <p>Time: {message.time.min}{message.time.sec}</p>
                    <p>Bonus: <Bonus numberBonus={message.bonus} /></p>
                    <p>Mistakes: {mistakes}</p>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isFinish: state.isFinishGame,
        mistakes: state.currentGame.mistakes,
        time: state.time,
    }
}

function mapDispatchToProps(dispatch){
    return {
        replay: () => dispatch(replayGame()),
        backToLevelesPage: () => dispatch(backToLevelesPage())
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Finish);