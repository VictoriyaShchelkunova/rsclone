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

export const finishGame = () => {
    return {
        type: 'FINISH_GAME',
    }
};

export const saveTime = ({minutes, seconds}) => {
    return {
        type: 'SAVE_TIME',
        payload: {minutes, seconds}
    }
};

export const closeMenu = () => {
    return {
        type: 'CLOSE_MENU',
    }
};
export const showMenu = () => {
    return {
        type: 'SHOW_MENU',
    }
};

export const changeUserName = (name) => {
    return {
        type: 'CHANGE_USER_NAME',
        payload: name
    }
};