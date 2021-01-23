import React from "react";
import Results from "./results/Results";
import { Snake } from "./snakeExaples/Snake";
import { SnakeResult } from "./snakeResult/SnakeResult";
import "./Field.css";
import { connect } from "react-redux";

const Field = ({isField}) => {
    return (
        <div className="field" style={isField ? {display: "block"} : {display: "none"}}>
            <Results isField={isField}/>
            <Snake />
            <SnakeResult />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isField: state.isField
    }
}

function mapDispatchToProps(dispatch){
    return {
        saveName: () => dispatch()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)
