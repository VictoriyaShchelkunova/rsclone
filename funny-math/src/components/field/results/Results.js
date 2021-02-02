import React from "react";
import "./Results.css";
import Result from "./result/Result";
import { connect } from "react-redux";

export const Results = ({isField}) => {
    return (
        <div className="results" >
            <Result isField={isField}/>
        </div>
    )
}

function mapStateToProps(state){
    return {
        isField: state.isField
    }
}

export default connect(mapStateToProps)(Results);

