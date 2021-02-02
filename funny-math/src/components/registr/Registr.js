import React from "react";
import "./Registr.css";
import { connect } from "react-redux";
import { changeUserName, showLevelesPage, changeUserPassword, saveEasyLevelesStatus, 
    saveMiddleLevelesStatus, saveHardLevelesStatus, saveStatistics } from "../../actions";

const newUser = {};
let currentName = "";
let currentPassword = "";
let users = localStorage.getItem("users");

const Registr = ({ changeName, isRegistrPage, showLevelesPage, changePassword, easyLevelesStatus, middleLevelesStatus,
     hardLevelesStatus, saveEasyLeveles, saveMiddleLeveles, saveHardLeveles, statistics, saveStat }) => {
    const inputNameHandler = (e) => {
        const userName = e.currentTarget.value;
        changeName(userName);
    }

    const inputPasswordHandler = (e) => {
        const userPassword = e.currentTarget.value;
        changePassword(userPassword);
    }

    const checkValidNickName = (e) => {
        debugger
        const nickName = e.currentTarget.value;
        const regExpNickName = /^[a-zA-Zа-яА-Я0-9_-]{3,10}$/;

        if (regExpNickName.test(nickName)) {
            if (users) {
                const usersList = JSON.parse(users);
                if (!usersList.find(({ userName }) => userName === nickName)) {
                    newUser.userName = nickName;
                    newUser.easyLevelesStatus = easyLevelesStatus;
                    newUser.middleLevelesStatus = middleLevelesStatus;
                    newUser.hardLevelesStatus = hardLevelesStatus;
                    newUser.statistics = statistics
                } else {
                    const currentUser = usersList.find(({ userName }) => userName === nickName);
                    saveEasyLeveles(currentUser.easyLevelesStatus);
                    saveMiddleLeveles(currentUser.middleLevelesStatus);
                    saveHardLeveles(currentUser.hardLevelesStatus);
                    saveStat(currentUser.statistics);
                    currentName = nickName;
                }
            } else {
                const usersList = [];
                localStorage.setItem("users", JSON.stringify(usersList));
                users = [];
                newUser.userName = nickName;
                newUser.easyLevelesStatus = easyLevelesStatus;
                newUser.middleLevelesStatus = middleLevelesStatus;
                newUser.hardLevelesStatus = hardLevelesStatus;
                newUser.statistics = statistics
            }
        } else {
            alert("Use English and Russian letters, numbers, signs - _ Length from 3 to 10 characters. For example Vasya-12");
        }
    }

    const checkValidPassword = (e) => {
        const password = e.currentTarget.value;
        const regExpPassword = /^[a-zA-Z0-9]{6,10}$/;
        if (regExpPassword.test(password)) {
            if (currentName) {
                currentPassword = password;
            } else {
                newUser.userPassword = password;
            }
        } else {
            alert("Use English letters, numbers. Length from 6 to 10 characters. For example Vasya12");
        }
    }

    const checkUserData = () => {
        if (currentName) {
            const usersList = JSON.parse(users);
            if (usersList.find(({ userName, userPassword }) => userName === currentName && userPassword === currentPassword)) {
                showLevelesPage();
            } else {
                alert("A user with this name is already registered. Enter the password correctly or register under a new name.")
            }
        } else {
            alert("This user is not registered. Press the button 'Registr'");
        }
    }

    const registrUserData = () => {
        if(!currentName){
            let usersList = [];
            if (typeof users === "string") {
                usersList = JSON.parse(users);
            }
            usersList.push(newUser);
            localStorage.setItem("users", JSON.stringify(usersList));
            showLevelesPage();
        }else {
            alert("A user with this name is already registered, click the button 'Submit'");
        }
                
    }

    return (
        <div className="registr-page" style={isRegistrPage ? { display: "flex" } : { display: "none" }}>
            <img src="assets/images/bee-registr-page.png" alt="bee" />
            <div>
                <p>What is your nickname?</p>
                <input type="text" onChange={inputNameHandler} onBlur={checkValidNickName}></input>
                <p>What is your password?</p>
                <input type="password" onChange={inputPasswordHandler} onBlur={checkValidPassword} />
                <p>Registr or submit your data?</p>
                <button onClick={registrUserData}>Registr</button>
                <button onClick={checkUserData}>Submit</button>
            </div>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        isRegistrPage: state.isRegistrPage,
        easyLevelesStatus: state.easyLevelesStatus,
        middleLevelesStatus: state.middleLevelesStatus,
        hardLevelesStatus: state.hardLevelesStatus,
        statistics: state.statistics
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeName: (name) => dispatch(changeUserName(name)),
        showLevelesPage: () => dispatch(showLevelesPage()),
        changePassword: (password) => dispatch(changeUserPassword(password)),
        saveEasyLeveles: (list) => dispatch(saveEasyLevelesStatus(list)),
        saveMiddleLeveles: (list) => dispatch(saveMiddleLevelesStatus(list)),
        saveHardLeveles: (list) => dispatch(saveHardLevelesStatus(list)),
        saveStat: (statistics) => dispatch(saveStatistics(statistics)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registr)