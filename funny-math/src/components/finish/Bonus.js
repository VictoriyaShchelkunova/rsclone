import React from "react";

export const Bonus = ({numberBonus}) => {
    const bonusList = [];
    if(numberBonus){
        for(let i = 0; i < numberBonus; i++){
            bonusList.push(<img src="assets/images/star.png" alt="" key={i}/>)
        }
    }
    return bonusList;
}

