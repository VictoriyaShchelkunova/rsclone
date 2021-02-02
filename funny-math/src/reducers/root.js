import { leveles } from "../leveles";
import { shuffle } from "../components/field/results/result/getResults";
import { getFirstOperands } from "../components/field/snakeExaples/cells/cell/getFirstOperands";
import { getOperations } from "../components/field/snakeExaples/cells/verticalOperation/getOperations";
import { getLevelesStatus } from "../getLevelesStatus";
import { updateStatistics } from "../updateStatistics";

const initialState = {
    levelesGame: leveles,
    statistics: {
        addition: { correct: 0, wrong: 0, attempts: 0 },
        substraction: { correct: 0, wrong: 0, attempts: 0 },
        multiplication: { correct: 0, wrong: 0, attempts: 0 },
        division: { correct: 0, wrong: 0, attempts: 0 },
    },
    bodyResultSnake: [{ class: "snake-body", status: false },
    { class: "snake-body-second", status: false },
    { class: "snake-body-third", status: false },
    { class: "snake-body-fourth", status: false },
    { class: "snake-body-fifth", status: false },
    { class: "snake-body-sixth", status: false },
    { class: "snake-body-seventh", status: false },
    { class: "snake-body-eighth", status: false },
    { class: "snake-body-ninth", status: false },
    { class: "snake-body-tenth", status: false },
    { class: "snake-body-eleventh", status: false },],
    easyLevelesStatus: [{ status: "progress", name: "1" }, { status: "uncomplete", name: "2", img: "assets/images/blockchain.png" },
    { status: "uncomplete", name: "3", img: "assets/images/blockchain.png" }, { status: "uncomplete", name: "4", img: "assets/images/blockchain.png" },
    { status: "uncomplete", name: "5", img: "assets/images/blockchain.png" }, { status: "uncomplete", name: "6", img: "assets/images/blockchain.png" }],
    middleLevelesStatus: [{ status: "uncomplete", name: "7", img: "assets/images/blockchain.png" }, { status: "uncomplete", name: "8", img: "assets/images/blockchain.png" },
    { status: "uncomplete", name: "9", img: "assets/images/blockchain.png" }, { status: "uncomplete", name: "10", img: "assets/images/blockchain.png" },
    { status: "uncomplete", name: "11", img: "assets/images/blockchain.png" }, { status: "uncomplete", name: "12", img: "assets/images/blockchain.png" }],
    hardLevelesStatus: [{ status: "uncomplete", name: "13", img: "assets/images/blockchain.png" }, { status: "uncomplete", name: "14", img: "assets/images/blockchain.png" },
    { status: "uncomplete", name: "15", img: "assets/images/blockchain.png" }, { status: "uncomplete", name: "16", img: "assets/images/blockchain.png" },
    { status: "uncomplete", name: "17", img: "assets/images/blockchain.png" }, { status: "uncomplete", name: "18", img: "assets/images/blockchain.png" }],
    correctAnswers: 0,
    resultVisibility: "visible",
    userScore: 0,
    userName: "",
    userPassword: "",
    isSound: true,
    userMistakes: 0,
    currentGame: { score: 0, mistakes: 0, operation: "" },
    isTimer: false,
    isFinishGame: false,
    time: { min: 0, sec: 0 },
    isMenu: false,
    isShowMenu: false,
    isHeader: false,
    isField: false,
    isRegistrPage: true,
    isLevelesPage: false,
    isEasyLeveles: false,
    isMiddleLeveles: false,
    isHardLeveles: false,
    isStatisticsPage: false,
    currentLevel: 0,
    currentLevelData: [],
    firstOperands: [],
    operations: {},
    isBurgerMenu: true,
    currentOperation: ""
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "HIDDEN_RESULT":
            return {
                ...state,
                resultVisibility: action.payload
            }
        case "VISIBLE_RESULT":
            return {
                ...state,
                resultVisibility: action.payload
            }
        case "VISIBLE_SNAKE":
            return {
                ...state,
                correctAnswers: state.correctAnswers + 1,
                bodyResultSnake: [...state.bodyResultSnake.map((fragment, index) => {
                    if (index === state.correctAnswers) {
                        return {
                            class: fragment.class,
                            status: action.payload
                        }
                    } else {
                        return fragment;
                    }
                })],
            }
        case "INCREASE_SCORE":
            return {
                ...state,
                currentGame: { score: state.currentGame.score + action.payload, mistakes: state.currentGame.mistakes }
            }
        case "INCREASE_MISTAKES":
            return {
                ...state,
                currentGame: { mistakes: state.currentGame.mistakes + 1, score: state.currentGame.score }
            }
        case "FINISH_GAME":
            return {
                ...state,
                isFinishGame: true,
                isTimer: false,
                easyLevelesStatus: [...getLevelesStatus(state.currentGame.mistakes, state.currentLevel, state)[0]],
                middleLevelesStatus: [...getLevelesStatus(state.currentGame.mistakes, state.currentLevel, state)[1]],
                hardLevelesStatus: [...getLevelesStatus(state.currentGame.mistakes, state.currentLevel, state)[2]],
                isField: false,
                isBurgerMenu: true,
            }
        case "SAVE_TIME":
            return {
                ...state,
                time: { min: action.payload.minutes, sec: action.payload.seconds }
            }
        case "CLOSE_MENU":
            return {
                ...state,
                isMenu: true,
                isShowMenu: false,
            }
        case "SHOW_MENU":
            return {
                ...state,
                isShowMenu: true,
                isMenu: false,
            }
        case "CHANGE_USER_NAME":
            return {
                ...state,
                userName: action.payload,
            }
        case "CHANGE_USER_PASSWORD":
            return {
                ...state,
                userPassword: action.payload,
            }
        case "SHOW_EASY_LEVELES":
            return {
                ...state,
                isEasyLeveles: !state.isEasyLeveles,
            }
        case "SHOW_MIDDLE_LEVELES":
            return {
                ...state,
                isMiddleLeveles: !state.isMiddleLeveles,
            }
        case "SHOW_HARD_LEVELES":
            return {
                ...state,
                isHardLeveles: !state.isHardLeveles,
            }
        case "SHOW_LEVELES_PAGE":
            return {
                ...state,
                isLevelesPage: true,
                isRegistrPage: false,
                isHeader: true
            }
        case "GET_CURRENT_LEVEL":
            return {
                ...state,
                currentLevel: action.payload,
                isBurgerMenu: false
            }
        case "START_GAME":
            return {
                ...state,
                isLevelesPage: false,
                isField: true,
                isTimer: true,
                currentLevelData: [...shuffle(leveles[state.currentLevel - 1])],
                firstOperands: [...getFirstOperands(leveles[state.currentLevel - 1])],
                operations: getOperations(leveles[state.currentLevel - 1])
            }
        case "REPLAY_GAME":
            return {
                ...state,
                isFinishGame: false,
                isField: true,
                isTimer: true,
                time: { min: 0, sec: 0 },
                currentGame: { score: 0, mistakes: 0 },
                bodyResultSnake: [{ class: "snake-body", status: false },
                { class: "snake-body-second", status: false },
                { class: "snake-body-third", status: false },
                { class: "snake-body-fourth", status: false },
                { class: "snake-body-fifth", status: false },
                { class: "snake-body-sixth", status: false },
                { class: "snake-body-seventh", status: false },
                { class: "snake-body-eighth", status: false },
                { class: "snake-body-ninth", status: false },
                { class: "snake-body-tenth", status: false },
                { class: "snake-body-eleventh", status: false },],
                correctAnswers: 0,
                isBurgerMenu: false
            }
        case "BACK_LEVELES_PAGE":
            return {
                ...state,
                isFinishGame: false,
                time: { min: 0, sec: 0 },
                currentGame: { score: 0, mistakes: 0 },
                bodyResultSnake: [{ class: "snake-body", status: false },
                { class: "snake-body-second", status: false },
                { class: "snake-body-third", status: false },
                { class: "snake-body-fourth", status: false },
                { class: "snake-body-fifth", status: false },
                { class: "snake-body-sixth", status: false },
                { class: "snake-body-seventh", status: false },
                { class: "snake-body-eighth", status: false },
                { class: "snake-body-ninth", status: false },
                { class: "snake-body-tenth", status: false },
                { class: "snake-body-eleventh", status: false },],
                correctAnswers: 0,
                isLevelesPage: true,
            }
        case "SAVE_EASY_LEVELES_STATUS":
            return {
                ...state,
                easyLevelesStatus: action.payload,
            }
        case "SAVE_MIDDLE_LEVELES_STATUS":
            return {
                ...state,
                middleLevelesStatus: action.payload,
            }
        case "SAVE_HARD_LEVELES_STATUS":
            return {
                ...state,
                hardLevelesStatus: action.payload,
            }
        case "SAVE_CURRENT_OPERATION":
            return {
                ...state,
                currentOperation: action.payload,
            }
        case "INCREASE_STATISTIC_MISTAKES":
            return {
                ...state,
                statistics: {...updateStatistics(state.statistics, state.currentOperation, false, state.userName)}
            }
        case "INCREASE_STATISTIC_CORRECT_ANSWERS":
            return {
                ...state,
                statistics: {...updateStatistics(state.statistics, state.currentOperation, true, state.userName)}
            }
        case "SAVE_STATISTICS": 
        return {
            ...state,
            statistics: {...action.payload}
        }
        case "SHOW_STATISTICS_PAGE":
            return {
                ...state,
                isStatisticsPage: true,
                isLevelesPage: false,
                isShowMenu: false
            }
        case "SHOW_LEVELES":
            return {
                ...state,
                isLevelesPage: true,
                isStatisticsPage: false,
                isShowMenu: false
            }
        default:
            return state;
    }

}