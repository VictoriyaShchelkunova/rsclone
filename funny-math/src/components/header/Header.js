import React from "react";
import "./Header.css";
import BurgerMenu from "./menu/BurgerMenu";
import UserData from "./userData/UserData";
import Menu from "../menu/Menu";
import { connect } from "react-redux";

const Header = ({isHeader}) => {
    return (
        <div className="header" style={isHeader ? {display: "flex"} : {display: "none"}}>
            <Menu />
            <BurgerMenu />
            <UserData />
        </div>
    )
}

function mapStateToProps(state){
    return {
        isHeader: state.isHeader
    }   
}

export default connect(mapStateToProps)(Header);