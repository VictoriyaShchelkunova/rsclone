import React from "react";
import './Main.css';
import { Field } from "../field/Field";
import { Header } from "../header/Header";

export const Main = () => {
    return (
        <div className="wrapper">
            <Header />
            <Field />
        </div>
    )
}