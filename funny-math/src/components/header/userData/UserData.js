import React from "react";
import "./UserData.css";
import { connect } from "react-redux";
import TimeCounter from "../time";

const UserData = ({ userScore, userName, isTimer }) => {

    return (
        <div className="user-data">
            <TimeCounter isTimer={isTimer}/>
            <div className="user-name">
                <span>{userName}</span>
            </div>
            <div className="user-score">
                <img src="assets/images/star.png" alt="" />
                <span>{userScore}</span>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        userScore: state.currentGame.score,
        userName: state.userName,
        isTimer: state.isTimer
    }
}

export default connect(mapStateToProps)(UserData);
