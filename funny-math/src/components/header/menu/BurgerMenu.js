import React from "react";
import "./BurgerMenu.css";
import { connect } from "react-redux";
import { showMenu } from "../../../actions";

export const BurgerMenu = ({ showMenu, isBurgerMenu }) => {
    const showMenuHandler = () => {
        showMenu();
    }
    return (
        <div className="burger-menu" onClick={showMenuHandler} style={isBurgerMenu ? {visibility: "visible"} : {visibility: "hidden"}}>
            <div className="burger-menu-item"></div>
            <div className="burger-menu-item"></div>
            <div className="burger-menu-item"></div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isMenu: state.isMenu,
        isBurgerMenu: state.isBurgerMenu
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showMenu: () => dispatch(showMenu())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu)