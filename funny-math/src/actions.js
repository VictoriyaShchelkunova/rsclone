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