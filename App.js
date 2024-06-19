import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import GameContextProvider from "./contexts/UserContextProvider";
import ScoresContextProvider from "./contexts/HighScoresProvider";

import Home from "./pages/HomePage";
import Game from "./pages/GamePage";
import TestGame from "./pages/testGame";
import HighScores from "./pages/Highscore";
import Customize from "./pages/CustomizePage";



class App extends Component {

    render() {
        return (
            <GameContextProvider>
                <ScoresContextProvider>
                    <Router>
                        <div className="App">
                            <ul className="App-header">

                            </ul>
                            <Routes>
                                <Route
                                    path="/"
                                    element={<Game />}
                                ></Route>
                                <Route
                                    path="/game"
                                    element={<Game />}
                                ></Route>
                                <Route
                                    path="/testgame"
                                    element={<TestGame />}
                                ></Route>
                                <Route
                                    path="/highscores"
                                    element={<HighScores />}
                                ></Route>
                                <Route
                                    path="/customize"
                                    element={<Customize />}
                                ></Route>
                            </Routes>
                        </div>
                    </Router>
                </ScoresContextProvider>
            </GameContextProvider>
            
        );
    }
}

export default App;

