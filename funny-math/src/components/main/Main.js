import React from "react";
import './Main.css';
import  Field  from "../field/Field";
import Header from "../header/Header";
import Finish from "../finish/Finish"; 
import Registr from "../registr/Registr";
import LevelesPage from "../levelsPage/LevelesPage";
import Statistics from "../statistics/Statistics";
import { connect } from "react-redux";

export const Main = ({isFinish}) => {
    
    return (
        <div className="wrapper">
            <Header />
            <Field />
            {isFinish ? <Finish /> : null }
            <Registr />
            <LevelesPage />
            <Statistics />
        </div>
    )
}

function mapStateToProps(state){
    return {
        isFinish: state.isFinishGame
    }
}

export default connect(mapStateToProps)(Main)