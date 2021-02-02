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

export const changeUserPassword = (password) => {
    return {
        type: 'CHANGE_USER_PSSWORD',
        payload: password
    }
};

export const showEasyLeveles = () => {
    return {
        type: 'SHOW_EASY_LEVELES',
    }
};

export const showMiddleLeveles = () => {
    return {
        type: 'SHOW_MIDDLE_LEVELES',
    }
};

export const showHardLeveles = () => {
    return {
        type: 'SHOW_HARD_LEVELES',
    }
};

export const showLevelesPage = () => {
    return {
        type: 'SHOW_LEVELES_PAGE',
    }
};

export const getCurrentLevel = (level) => {
    return {
        type: 'GET_CURRENT_LEVEL',
        payload: level
    }
};

export const startGame = () => {
    return {
        type: 'START_GAME',
    }
};

export const replayGame = () => {
    return {
        type: 'REPLAY_GAME',
    }
};

export const backToLevelesPage = () => {
    return {
        type: 'BACK_LEVELES_PAGE',
    }
};


export const saveEasyLevelesStatus = (list) => {
    return {
        type: 'SAVE_EASY_LEVELES_STATUS',
        payload: list
    }
};

export const saveMiddleLevelesStatus = (list) => {
    return {
        type: 'SAVE_MIDDLE_LEVELES_STATUS',
        payload: list
    }
};

export const saveHardLevelesStatus = (list) => {
    return {
        type: 'SAVE_HARD_LEVELES_STATUS',
        payload: list
    }
};


export const saveCurrentOperation = (operation) => {
    return {
        type: 'SAVE_CURRENT_OPERATION',
        payload: operation
    }
};

export const increaseStatisticMistakes = () => {
    return {
        type: 'INCREASE_STATISTIC_MISTAKES',        
    }
};

export const increaseStatisticCorrectAnswers = () => {
    return {
        type: 'INCREASE_STATISTIC_CORRECT_ANSWERS',        
    }
};

export const saveStatistics = (statistics) => {
    return {
        type: "SAVE_STATISTICS",
        payload: statistics
    }    
}

export const showStatisticsPage = () => {
    return {
        type: "SHOW_STATISTICS_PAGE"
    }
}

export const showLeveles = () => {
    return {
        type: "SHOW_LEVELES"
    }
}


