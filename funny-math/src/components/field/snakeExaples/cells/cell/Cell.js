import React from "react";
import "./Cell.css";
import { Operand } from "../operand/Operand";
import { Operation } from "../verticalOperation/VerticalOperation";
import { HorizontalOperation } from "../horisontalOperation/HorizontalOperation";
import { connect } from "react-redux";


const Cell = ({ parity, indexOperand, indexOperation, firstOperands, operations, isField }) => {
    if(isField){
        const cells = [];
        const verticalOperation = operations.verticalOperation;
        const horizontalOperation = operations.horizontalOperation;
        let indexNumber = indexOperand;
        let operation = indexOperation;
    
        for (let i = 0; i < 7; i++) {
            if (!(i % 2) && !(parity % 2)) {
                cells.push(<div className="cell" key={i}>
                    <Operand number={firstOperands[indexNumber]} id={parity} cell={i} />
                </div>);
                indexNumber += 1;
            } else if (!(i % 2) && parity % 2) {
                console.log(verticalOperation);
                cells.push(<div className="cell" key={i}>
                    <Operation operation={verticalOperation[operation]} />
                </div>);
                operation += 1;
            } else if (i === 3 && parity === 0) {
                cells.push(<div className="cell" key={i}>
                    <HorizontalOperation operation={horizontalOperation[0]} />
                </div>);
            } else if (i === 1 && parity === 4) {
                cells.push(<div className="cell" key={i}>
                    <HorizontalOperation operation={horizontalOperation[1]} />
                </div>);
            } else if (i === 5 && parity === 4) {
                cells.push(<div className="cell" key={i}>
                    <HorizontalOperation operation={horizontalOperation[2]} />
                </div>);
            } else {
                cells.push(<div className="cell" key={i}></div>);
            }
        }
        return cells;
    } else {
        return (
            <div></div>
        )
    }
   
}

function mapStateToProps(state) {
    return {
        firstOperands: state.firstOperands,
        operations: state.operations,
        isField: state.isField,
    }
}

export default connect(mapStateToProps)(Cell);