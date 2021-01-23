import React, { Component } from "react";
import "./Registr.css";
import { connect } from "react-redux";
import { changeUserName, showLevelesPage } from "../../actions";

const Registr = ({changeName, name, isRegistrPage, showLevelesPage}) => {
    const inputHandler = (e) => {
        const userName = e.currentTarget.value;
        changeName(userName);
    }
    const buttonHandler = () => {
        if(name.trim()){ 
            localStorage.setItem("userName", name);
            showLevelesPage();
        }
    }
    return (
        <div className="registr-page" style={isRegistrPage ? {display: "flex"} : {display: "none"}}>
            <img src="assets/images/bee-registr-page.png" alt="bee" />
            <div>
                <p>What is your name?</p>
                <input type="text" onChange={inputHandler}></input>
                <button onClick={buttonHandler}>ok</button>
            </div>
        </div>
    )
}
function mapStateToProps(state){
    return {
        name: state.userName,
        isRegistrPage: state.isRegistrPage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeName: (name) => dispatch(changeUserName(name)),
        showLevelesPage: () => dispatch(showLevelesPage())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registr)