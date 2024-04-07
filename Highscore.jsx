import './style/highscores.css'
import { useContext } from "react";
import UserContext from "../contexts/HighScoresContext";

function HighScores() {
  const {allTopScores, setAllTopScores} = useContext(UserContext)


  return (
    <div>
        <h1>HighScores Section</h1>
        {allTopScores.map((item,index) =>
          <div id="allScores-popup">
            <p id='allScoresName'>{item.name}</p>
            <b><p id='allScoresScore'>{item.score}</p></b>
            <p id='allScoresDate'>{item.date}</p>
          </div>
      )}

    </div>
    

    
  );
  }
  
  export default HighScores;
  