import React from "react";
import './Main.css';
import  Field  from "../field/Field";
import Header from "../header/Header";
import Finish from "../finish/Finish"; 
import Registr from "../registr/Registr";
import { LevelesPage } from "../levelsPage/LevelesPage";

export const Main = () => {
    return (
        <div className="wrapper">
            <Header />
            <Field />
            <Finish />
            <Registr />
            <LevelesPage />
        </div>
    )
}