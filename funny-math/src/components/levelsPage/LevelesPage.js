import React from "react";
import "./LevelesPage.css";
import { connect } from "react-redux";
import { showEasyLeveles, showMiddleLeveles, showHardLeveles, getCurrentLevel, startGame } from "../../actions";

const LevelesPage = ({ easyLeveles, middleLeveles, hardLeveles, isEasyLeveles, isMiddleLeveles, isHardLeveles,
    showEasyLeveles, showMiddleLeveles, showHardLeveles, isLevelesPage, startGame, getCurrentLevel}) => {
        console.log(easyLeveles, middleLeveles, hardLeveles);
    const firstRowEasy = easyLeveles.slice(0, 3);
    const secondRowEasy = easyLeveles.slice(3);
    const firstRowMiddle = middleLeveles.slice(0, 3);
    const secondRowMiddle = middleLeveles.slice(3);
    const firstRowHard = hardLeveles.slice(0, 3);
    const secondRowHard = hardLeveles.slice(3);
    const showEasyLevelesBlock = () => {
        if (isMiddleLeveles) showMiddleLeveles();
        if (isHardLeveles) showHardLeveles();
        showEasyLeveles();
    }
    const showMiddleLevelesBlock = () => {
        if (isEasyLeveles) showEasyLeveles();
        if (isHardLeveles) showHardLeveles();
        showMiddleLeveles();
    }
    const showHardLevelesBlock = () => {
        if (isEasyLeveles) showEasyLeveles();
        if (isMiddleLeveles) showMiddleLeveles();
        showHardLeveles();
    }
    const getCurrentLevelNumber = (e) => {
        const currentLevel = +e.currentTarget.firstChild.innerText;
        if (currentLevel) {
            getCurrentLevel(currentLevel);
            startGame();
        }
    }
    return (
        <section className="leveles-page" style={isLevelesPage ? { display: "flex" } : { display: "none" }}>
            <div className="level" onClick={showEasyLevelesBlock}>EASY</div>
            <div className="level-easy" style={isEasyLeveles ? { display: "flex" } : { display: "none" }}>
                <div className="level-row">
                    {firstRowEasy.map(({ name, img, status }, idx) => {
                        if (status !== "uncomplete") {
                            return <div className="level-block" key={idx} onClick={getCurrentLevelNumber}><span>{name}</span></div>
                        } else {
                            return <div className="level-block" key={idx} onClick={getCurrentLevelNumber}><img src={img} alt="blockchain-icon" /></div>
                        }
                    })}
                </div>
                <div className="level-row">
                    {secondRowEasy.map(({ name, img, status }, idx) => {
                        if (status !== "uncomplete") {
                            return <div className="level-block" key={idx} onClick={getCurrentLevelNumber}><span>{name}</span></div>
                        } else {
                            return <div className="level-block" key={idx} onClick={getCurrentLevelNumber}><img src={img} alt="blockchain-icon" /></div>
                        }
                    })}
                </div>
            </div>
            <div className="level" onClick={showMiddleLevelesBlock}>MIDDLE</div>
            <div className="level-middle" style={isMiddleLeveles ? { display: "flex" } : { display: "none" }}>
                <div className="level-row">
                    {firstRowMiddle.map(({ name, img, status }, idx) => {
                        if (status !== "uncomplete") {
                            return <div className="level-block" key={idx} onClick={getCurrentLevelNumber}><span>{name}</span></div>
                        } else {
                            return <div className="level-block" key={idx} onClick={getCurrentLevelNumber}><img src={img} alt="blockchain-icon" /></div>
                        }
                    })}
                </div>
                <div className="level-row">
                    {secondRowMiddle.map(({ name, img, status }, idx) => {
                        if (status !== "uncomplete") {
                            return <div className="level-block" key={idx} onClick={getCurrentLevelNumber}><span>{name}</span></div>
                        } else {
                            return <div className="level-block" key={idx} onClick={getCurrentLevelNumber}><img src={img} alt="blockchain-icon" /></div>
                        }
                    })}
                </div>
            </div>
            <div className="level" onClick={showHardLevelesBlock}>HARD</div>
            <div className="level-hard" style={isHardLeveles ? { display: "flex" } : { display: "none" }}>
                <div className="level-row">
                    {firstRowHard.map(({ name, img, status }, idx) => {
                        if (status !== "uncomplete") {
                            return <div className="level-block" key={idx} onClick={getCurrentLevelNumber}><span>{name}</span></div>
                        } else {
                            return <div className="level-block" key={idx} onClick={getCurrentLevelNumber}><img src={img} alt="blockchain-icon" /></div>
                        }
                    })}
                </div>
                <div className="level-row">
                    {secondRowHard.map(({ name, img, status }, idx) => {
                        if (status !== "uncomplete") {
                            return <div className="level-block" key={idx} onClick={getCurrentLevelNumber}><span>{name}</span></div>
                        } else {
                            return <div className="level-block" key={idx} onClick={getCurrentLevelNumber}><img src={img} alt="blockchain-icon" /></div>
                        }
                    })}
                </div>
            </div>
        </section>
    )
}

function mapStateToProps(state) {
    return {
        easyLeveles: state.easyLevelesStatus,
        middleLeveles: state.middleLevelesStatus,
        hardLeveles: state.hardLevelesStatus,
        isEasyLeveles: state.isEasyLeveles,
        isMiddleLeveles: state.isMiddleLeveles,
        isHardLeveles: state.isHardLeveles,
        isLevelesPage: state.isLevelesPage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showEasyLeveles: () => dispatch(showEasyLeveles()),
        showMiddleLeveles: () => dispatch(showMiddleLeveles()),
        showHardLeveles: () => dispatch(showHardLeveles()),
        getCurrentLevel: (level) => dispatch(getCurrentLevel(level)),
        startGame: () => dispatch(startGame()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LevelesPage);