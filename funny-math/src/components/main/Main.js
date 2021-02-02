import React from "react";
import './Main.css';
import Field from "../field/Field";
import Header from "../header/Header";
import Finish from "../finish/Finish";
import Registr from "../registr/Registr";
import LevelesPage from "../levelsPage/LevelesPage";
import Statistics from "../statistics/Statistics";
import { connect } from "react-redux";

export const Main = ({ isFinish }) => {

    return (
        <div className="wrapper">
            <Header />
            <Field />
            {isFinish ? <Finish /> : null}
            <Registr />
            <LevelesPage />
            <Statistics />
            <footer>
                <span>2021</span>
                <img src="assets/images/rs_school_js.png" alt="" />
                <a href="https://rs.school/js/">https://rs.school/js/</a>
                <a href="https://github.com/VictoriyaShchelkunova/">https://github.com/VictoriyaShchelkunova/</a>
            </footer>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isFinish: state.isFinishGame
    }
}

export default connect(mapStateToProps)(Main)