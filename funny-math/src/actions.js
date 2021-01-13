export const makeHiddenResult = (string) => {
    return {
        type: 'HIDDEN_RESULT',
        payload: string
    }
};

export const makeVisibleResult = (string) => {
    return {
        type: 'VISIBLE_RESULT',
        payload: string
    }
};

export const makeVisibleSnake = (boolean) => {
    return {
        type: 'VISIBLE_SNAKE',
        payload: boolean
    }
};

export const increaseScore = (num) => {
    return {
        type: 'INCREASE_SCORE',
        payload: num
    }
};

export const increaseMistakes = (num) => {
    return {
        type: 'INCREASE_MISTAKES',
        payload: num
    }
};