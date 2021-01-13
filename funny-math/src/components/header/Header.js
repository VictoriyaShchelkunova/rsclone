import React from "react";
import "./Header.css";
import { BurgerMenu } from "./menu/BurgerMenu";
import UserData from "./userData/UserData";

export const Header = () => {
    return (
        <div className="header">
            <BurgerMenu />
            <UserData />
        </div>
    )
}