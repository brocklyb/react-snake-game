import React, {useState} from "react";

import HighScoresContext from "./HighScoresContext";

const ScoresContextProvider = ({children}) =>{
    const [ allTopScores, setAllTopScores ] = useState([{
        "name": "Sheppard Tomankowski",
        "score": 2,
        "date": "2/20/2023"
      }, {
        "name": "Giraldo Orange",
        "score": 1,
        "date": "11/11/2022"
      }, {
        "name": "Frank Kenelin",
        "score": 1,
        "date": "4/27/2022"
      }, {
        "name": "Joshia Partner",
        "score": 1,
        "date": "7/2/2022"
      }, {
        "name": "Valerye Wandrich",
        "score": 1,
        "date": "5/8/2022"
      }, {
        "name": "Emanuele Rumke",
        "score": 1,
        "date": "4/30/2023"
      }, {
        "name": "Blanch Corballis",
        "score": 1,
        "date": "9/28/2023"
      }, {
        "name": "Daveta Francillo",
        "score": 1,
        "date": "7/29/2023"
      }, {
        "name": "Marietta Starmer",
        "score": 1,
        "date": "11/23/2023"
      }, {
        "name": "Delmar Sigward",
        "score": 1,
        "date": "2/2/2024"
      }, {
        "name": "Mathilda Down",
        "score": 1,
        "date": "5/20/2023"
      }, {
        "name": "Humberto Clulee",
        "score": 1,
        "date": "8/27/2022"
      }, {
        "name": "Hildagarde Poulett",
        "score": 1,
        "date": "4/25/2022"
      }, {
        "name": "Lonny Quig",
        "score": 1,
        "date": "1/6/2024"
      }, {
        "name": "Tatiana Bayfield",
        "score": 1,
        "date": "1/24/2024"
      }, {
        "name": "Teresina Moth",
        "score": 1,
        "date": "7/20/2022"
      }, {
        "name": "Kass Habishaw",
        "score": 1,
        "date": "5/28/2023"
      }, {
        "name": "Marcia Laidler",
        "score": 1,
        "date": "9/11/2022"
      }, {
        "name": "Lavinia Leng",
        "score": 1,
        "date": "12/21/2023"
      }, {
        "name": "Derry Youens",
        "score": 1,
        "date": "10/13/2022"
      }, {
        "name": "Payton Hughland",
        "score": 1,
        "date": "6/26/2022"
      }, {
        "name": "Vivianne Iaduccelli",
        "score": 1,
        "date": "9/26/2022"
      }, {
        "name": "Tabb Hall-Gough",
        "score": 1,
        "date": "6/1/2023"
      }, {
        "name": "Bogart Whiskerd",
        "score": 1,
        "date": "1/22/2024"
      }, {
        "name": "Helen-elizabeth Goosnell",
        "score": 1,
        "date": "7/24/2022"
      }])

    const [ recentScores, setRecentScores ] = useState([{}])

    return(
        <HighScoresContext.Provider value={{ allTopScores, setAllTopScores, recentScores, setRecentScores }}>
            {children}
        </HighScoresContext.Provider>
    )
}

export default ScoresContextProvider;