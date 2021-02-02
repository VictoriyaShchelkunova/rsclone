const openNextLevel = (mistakes, currentLevel, state) => {
    debugger
    let easyLevelesStatus;
    let middleLevelesStatus;
    let hardLevelesStatus;

    let users = JSON.parse(localStorage.getItem("users"));
    const currentUser = users.find(({ userName }) => userName === state.userName);

    let easyLeveles = currentUser.easyLevelesStatus.map((level) => {
        if (mistakes < 4) {
            return changeStatusLevel(level.status, level.name, currentLevel, level.img);
        };
        return level;
    });

    let middleLeveles = currentUser.middleLevelesStatus.map((level) => {
        if (mistakes < 4) {
            return changeStatusLevel(level.status, level.name, currentLevel, level.img);
        }
        return level;
    });

    let hardLeveles = currentUser.hardLevelesStatus.map((level) => {
        return changeStatusLevel(level.status, level.name, currentLevel, level.img);
    });

    users = users.map((user) => {
        if (user.userName === state.userName) {
            return {
                ...user,
                easyLevelesStatus: easyLeveles,
                middleLevelesStatus: middleLeveles,
                hardLevelesStatus: hardLeveles,
            }
        }
        return user;
    });

    localStorage.setItem("users", JSON.stringify(users));

    easyLevelesStatus = [...state.easyLevelesStatus.map((level) => {
        if(mistakes < 4){
            return changeStatusLevel(level.status, level.name, currentLevel, level.img);
        };
        return level;        
    })];

    middleLevelesStatus = [...state.middleLevelesStatus.map((level) => {
        if(mistakes < 4) {
            return changeStatusLevel(level.status, level.name, currentLevel, level.img);
        }
        return level;        
    })];

    hardLevelesStatus = [...state.hardLevelesStatus.map((level) => {
        if(mistakes < 4){
            return changeStatusLevel(level.status, level.name, currentLevel, level.img);
        }
        return level;
    })];

    return [easyLevelesStatus, middleLevelesStatus, hardLevelesStatus];
}

function changeStatusLevel(status, name, currentLevel, img) {
    if (+name === currentLevel) {
        return { status: "complete", name };
    } else if (+name - 1 === currentLevel) {
        return { status: "progress", name };
    } else {
        if (status === "complete") {
            return { status, name };
        }
        return { status, name, img };
    }
}

export const getLevelesStatus = (mistakes, currentLevel, state) => {
    return openNextLevel(mistakes, currentLevel, state);
}

