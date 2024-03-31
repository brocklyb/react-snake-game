import React, {useState} from "react";

import UserContext from "./UserContext";

const GameContextProvider = ({children}) =>{
    const [ snakeColor, setSnakeColor ] = useState('green')
    const [ gameBoardColor, setGameBoardColor ] = useState('aquamarine')
    const [ foodColor, setFoodColor ] = useState('red')

    return(
        <UserContext.Provider value={{snakeColor,setSnakeColor,gameBoardColor,setGameBoardColor,foodColor, setFoodColor}}>
            {children}
        </UserContext.Provider>
    )
}

export default GameContextProvider;