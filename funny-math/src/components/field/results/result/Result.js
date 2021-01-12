import React from "react";
import './Result.css';
import { shuffleResults } from "./getResults";
import { connect } from 'react-redux';
import { makeHiddenResult, makeVisibleResult, makeVisibleSnake } from "../../../../actions";

export const Result = ({ resultVisibility, makeHiddenResult, makeVisibleResult, makeVisibleSnake }) => {

    const dragStart = (e) => {
        e.preventDefault();
    }

    const mouseDown = (event) => {
        const result = event.currentTarget;
        let droppableBelow = null;
        let currentDroppable = null;
        let usersAnswer = result.firstChild.innerText;

        let shiftX = event.clientX - result.getBoundingClientRect().left;
        let shiftY = event.clientY - result.getBoundingClientRect().top;

        result.style.position = 'absolute';
        result.style.zIndex = 1000;

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            result.style.left = pageX - shiftX + 'px';
            result.style.top = pageY - shiftY + 'px';
        }

        const onMouseMove = (e) => {
            moveAt(e.pageX, e.pageY);
            makeHiddenResult();
            let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
            makeVisibleResult();

            if (!elemBelow) return;

            droppableBelow = elemBelow.closest('.droppable');
            if (currentDroppable != droppableBelow) {
                if (currentDroppable) {
                    leaveDroppable(currentDroppable);
                }
            }
        }

        document.addEventListener('mousemove', onMouseMove);

        result.onmouseup = () => {
            let clearAnswer;
            if (droppableBelow) {
                clearAnswer = droppableBelow.firstChild.innerText;
            }
            if (usersAnswer !== clearAnswer) {
                result.style.position = "relative";
                result.style.top = "";
                result.style.left = "";
                result.style.zIndex = "";
                if (droppableBelow) leaveDroppable(droppableBelow);

            } else {
                result.style.display = "none";
                droppableBelow.style.background = "rgb(33, 241, 26)";
                droppableBelow.firstChild.classList.remove("text-hidden");
                droppableBelow.firstChild.classList.add("text-visual");
                droppableBelow.classList.remove("droppable");
                makeVisibleSnake();
            };

            document.removeEventListener('mousemove', onMouseMove);
            result.onmouseup = null;
        };
    }

    const leaveDroppable = (elem) => {
        elem.style.background = '';
    }


    const result = [];
    for (let i = 0; i < 11; i++) {

        result.push(
            <div className="result" style={{ visibility: resultVisibility }} key={i} onDragStart={dragStart} onMouseDown={mouseDown} >
                <span>{shuffleResults[i]}</span>
            </div>
        );
    }
    return result;

}

function mapStateToProps(state) {
    return {
        resultVisibility: state.resultVisibility
    };
};

function mapDispatchToProps(dispatch) {
    return {
        makeHiddenResult: () => dispatch(makeHiddenResult("hidden")),
        makeVisibleResult: () => dispatch(makeVisibleResult("visible")),
        makeVisibleSnake: () => dispatch(makeVisibleSnake(true))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);




