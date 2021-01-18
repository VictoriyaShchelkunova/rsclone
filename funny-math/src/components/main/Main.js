import React from "react";
import './Main.css';
import { Field } from "../field/Field";
import { Header } from "../header/Header";
import Finish from "../finish/Finish"; 

export const Main = () => {
    return (
        <div className="wrapper">
            <Header />
            <Field />
            <Finish />
        </div>
    )
}