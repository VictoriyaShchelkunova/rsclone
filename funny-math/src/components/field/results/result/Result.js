import React from "react";
import './Result.css';
import { connect } from 'react-redux';
import {
    makeHiddenResult, makeVisibleResult, makeVisibleSnake, increaseScore, increaseMistakes, finishGame,
    saveCurrentOperation, increaseStatisticMistakes, increaseStatisticCorrectAnswers
} from "../../../../actions";
import { leveles } from "../../../../leveles";

export const Result = ({ resultVisibility, makeHiddenResult, makeVisibleResult, makeVisibleSnake, increaseScore,
    isSound, increaseMistakes, currentGame, finishGame, currentLevelData, isField, currentLevel, saveOperation,
    increaseStatisticMistake, increaseStatisticCorrectAnswer }) => {
    const shuffleResults = currentLevelData;

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
                const currentLevelGame = leveles[currentLevel - 1];
                let idxOperation = 0;

                clearAnswer = droppableBelow.firstChild.innerText;
                currentLevelGame.forEach((example, idx) => {
                    if (example.firstOperand === +clearAnswer) {
                        idxOperation = idx - 1;
                    }
                });

                let currentOperation = currentLevelGame[idxOperation].operation[0];
                saveOperation(currentOperation);
            }
            if (usersAnswer !== clearAnswer) {
                result.style.position = "relative";
                result.style.top = "";
                result.style.left = "";
                result.style.zIndex = "";
                if (droppableBelow) leaveDroppable(droppableBelow);
                if (clearAnswer) {
                    if (isSound) {
                        const error = new Audio('assets/sounds/error.m4a');
                        error.play();
                    }
                    increaseMistakes();
                    increaseStatisticMistake();
                }

            } else {
                result.style.display = "none";
                droppableBelow.style.background = "rgb(33, 241, 26)";
                droppableBelow.firstChild.classList.remove("text-hidden");
                droppableBelow.firstChild.classList.add("text-visual");
                droppableBelow.classList.remove("droppable");
                if (isSound && currentGame.score !== 10) {
                    const error = new Audio('assets/sounds/correct.wav');
                    error.play();
                }
                makeVisibleSnake();
                increaseScore();
                increaseStatisticCorrectAnswer();
                saveOperation("");

                if (currentGame.score === 10) {
                    finishGame();
                }
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
            <div className="result" style={isField ? { visibility: resultVisibility } : { display: "flex", position: "absolute" }} key={i} onDragStart={dragStart} onMouseDown={mouseDown} >
                <span>{shuffleResults[i]}</span>
            </div>
        );
    }
    return result;

}

function mapStateToProps(state) {
    return {
        resultVisibility: state.resultVisibility,
        isSound: state.isSound,
        currentGame: state.currentGame,
        isFinishGame: state.isFinishGame,
        levelesGame: state.levelesGame,
        currentLevel: state.currentLevel,
        currentLevelData: state.currentLevelData,
        currentOperation: state.currentOperation
    };
};

function mapDispatchToProps(dispatch) {
    return {
        makeHiddenResult: () => dispatch(makeHiddenResult("hidden")),
        makeVisibleResult: () => dispatch(makeVisibleResult("visible")),
        makeVisibleSnake: () => dispatch(makeVisibleSnake(true)),
        increaseScore: () => dispatch(increaseScore(1)),
        increaseMistakes: () => dispatch(increaseMistakes(1)),
        finishGame: () => dispatch(finishGame()),
        saveOperation: (operation) => dispatch(saveCurrentOperation(operation)),
        increaseStatisticMistake: () => dispatch(increaseStatisticMistakes()),
        increaseStatisticCorrectAnswer: () => dispatch(increaseStatisticCorrectAnswers()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);




