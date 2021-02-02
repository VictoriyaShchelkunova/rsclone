import React from "react";
import "./Menu.css";
import { connect } from "react-redux";
import { closeMenu, showStatisticsPage, showLeveles } from "../../actions";

const Menu = ({ closeMenu, isShowMenu, showStat, isLevelesPage, isStatisticsPage, turnLevelesPage }) => {
    const closeMenuHandler = () => {
        closeMenu();
    }

    const showStatistics = () => {
        showStat();
    }

    const showPageLeveles = () => {
        turnLevelesPage();
    }
    
    return (
        <div className="menu-block" style={(isShowMenu) ? { animation: "show-menu 1.5s linear 0.2s", animationFillMode: "forwards" }
            : { background: "rgb(0, 132, 255)"}}>
            <img src="assets/images/close-menu.png" alt="icon-close" onClick={closeMenuHandler} />
            <ul>
                <li className={isLevelesPage ? "active-link" : ""} onClick={showPageLeveles}>Main</li>
                {/* <li>Settings</li> */}
                <li  className={isStatisticsPage ? "active-link" : ""} onClick={showStatistics}>Statistics</li>
            </ul>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isShowMenu: state.isShowMenu,
        isLevelesPage: state.isLevelesPage,
        isStatisticsPage: state.isStatisticsPage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeMenu: () => dispatch(closeMenu()),
        showStat: () => dispatch(showStatisticsPage()),
        turnLevelesPage: () => dispatch(showLeveles())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

