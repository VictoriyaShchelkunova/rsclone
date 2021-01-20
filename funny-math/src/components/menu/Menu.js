import React from "react";
import "./Menu.css";
import { connect } from "react-redux";
import { closeMenu } from "../../actions";

const Menu = ({ closeMenu, isShowMenu }) => {
    const closeMenuHandler = () => {
        closeMenu();
    }
    
    return (
        <div className="menu-block" style={(isShowMenu) ? { animation: "show-menu 1.5s linear 0.2s", animationFillMode: "forwards" }
            : { background: "rgb(0, 132, 255)"}}>
            <img src="assets/images/close-menu.png" alt="icon-close" onClick={closeMenuHandler} />
            <ul>
                <li className="active-link">Main</li>
                <li>Game</li>
                <li>Settings</li>
                <li>Statistics</li>
            </ul>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isShowMenu: state.isShowMenu,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeMenu: () => dispatch(closeMenu())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

