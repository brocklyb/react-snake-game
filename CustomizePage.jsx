import { useContext } from "react";
import { useState } from "react";
import TestGame from "./testGame";
import UserContext from "../contexts/UserContext";

function Customize() {
  const {setSnakeColor,setGameBoardColor, setFoodColor} = useContext(UserContext)


  const submitColors = (e) =>{
    e.preventDefault()
  }

  return (
    <div>
        <h1>Customize Section</h1>

        <form id="color-form">
          <div id="snake-color">
            <label for="colorPicker">Choose Snake color:</label>
            <input type="color" id="colorPicker" onChange={(e) => setSnakeColor(e.target.value)}></input>
          </div>

          <div id="board-color">
            <label for="colorPicker">Choose Game Board color:</label>
            <input type="color" id="colorPicker" onChange={(e) => setGameBoardColor(e.target.value)}></input>
          </div>

          <div id="food-color">
            <label for="colorPicker">Choose Food color:</label>
            <input type="color" id="colorPicker" onChange={(e) => setFoodColor(e.target.value)}></input>
          </div>
          <button type="submit" onClick={submitColors}>Submit</button>
        </form>

        <hr></hr>
        <hr></hr>
    </div>
    

    
  );
}

export default Customize;

/*
  <div>
        <h1>Customize Section</h1>

        <form id="color-form">
          <div id="snake-color">
            <label for="colorPicker">Choose Snake color:</label>
            <input type="color" id="colorPicker"  onChange={(e) => setSnakeColor(e.target.value)}></input>
          </div>

          <div id="board-color">
            <label for="colorPicker">Choose Game Board color:</label>
            <input type="color" id="colorPicker" onChange={(e) => setBoardColor(e.target.value)}></input>
          </div>
          <button type="submit" onClick={submitColors}>Submit</button>
        </form>

        <hr></hr>
        <hr></hr>
    </div>
*/
