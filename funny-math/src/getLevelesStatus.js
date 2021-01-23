const openNextLevel = (mistakes, currentLevel, state) => {
    let easyLevelesStatus;
    let middleLevelesStatus;
    let hardLevelesStatus;
    if (currentLevel < 7) {
        if (mistakes < 4) {
            easyLevelesStatus = [...state.easyLevelesStatus.map(({ status, name, img }) => {
                return changeStatusLevel(status, name, currentLevel, img);
            })];
        }        
    } else {
        easyLevelesStatus = state.easyLevelesStatus;
    };

    if (currentLevel < 13 && currentLevel > 6) {
        if (mistakes < 4) {
            middleLevelesStatus = [...state.middleLevelesStatus.map(({ status, name, img }) => {
                return changeStatusLevel(status, name, currentLevel, img);
            })];
        }
    } else {
        middleLevelesStatus = state.easyLevelesStatus;
    };

    if (currentLevel < 19 && currentLevel > 12) {
        if (mistakes < 4) {
            hardLevelesStatus = [...state.hardLevelesStatus.map(({ status, name, img }) => {
                return changeStatusLevel(status, name, currentLevel, img);
            })];
        }
    } else {
        hardLevelesStatus = state.easyLevelesStatus;
    }
    return [easyLevelesStatus, middleLevelesStatus, hardLevelesStatus];
}

function changeStatusLevel(status, name, currentLevel, img) {
    if (name === currentLevel) {
        return { status: "complete", name };
    } else if (name - 1 === currentLevel) {
        return { status: "progress", name };
    } else {
        if(name === "complete"){
            return {status, name};
        }
        return { status, name, img };
    }
}

export const getLevelesStatus = (mistakes, currentLevel, state) => {
    return openNextLevel(mistakes, currentLevel, state);
} 

