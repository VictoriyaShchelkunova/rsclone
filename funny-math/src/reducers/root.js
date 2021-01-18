const initialState = {
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
    resultVisibility: "visible",
    userScore: 0,
    userName: "Вася",
    isSound: true,
    userMistakes: 0,
    currentGame: { score: 0, mistakes: 0 },
    isTimer: true,
    isFinishGame: false,
    time: {min: 0, sec: 0}
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
            isTimer: false
        }
        case "SAVE_TIME":
        return {
            ...state,
            time: {min: action.payload.minutes, sec: action.payload.seconds}
        }
        default:
            return state;
    }

}