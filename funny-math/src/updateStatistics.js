export const updateStatistics = (statistics, operation, status, name) => {
    debugger

    let users = JSON.parse(localStorage.getItem("users"));
    const currentUser = users.find(({ userName }) => userName === name);
    const userStatistic = currentUser.statistics;

    let resultStatistics = statistics;
    let operationName = (operation === "+") ? "addition" :
        (operation === "-") ? "substraction" :
            (operation === "x") ? "multiplication" : "division";
    resultStatistics[operationName].attempts =  resultStatistics[operationName].attempts + 1;
    userStatistic[operationName].attempts = userStatistic[operationName].attempts + 1;
    if(status){
        resultStatistics[operationName].correct =  resultStatistics[operationName].correct + 1;
        userStatistic[operationName].correct = userStatistic[operationName].correct + 1;
    } else {
        resultStatistics[operationName].wrong =  resultStatistics[operationName].wrong + 1;
        userStatistic[operationName].wrong = userStatistic[operationName].wrong + 1;
    }
    users = users.map((user) => {
        if (user.userName === name) {
            return {
                ...user,
                statistics: userStatistic
            }
        }
        return user;
    });

    localStorage.setItem("users", JSON.stringify(users));
    return resultStatistics;
}