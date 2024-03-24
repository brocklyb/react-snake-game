import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from "./pages/HomePage";
import Game from "./pages/GamePage";
import HighScores from "./pages/Highscore";
import Customize from "./pages/CustomizePage";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <ul className="App-header">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        ></Route>
                        <Route
                            path="/game"
                            element={<Game />}
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
        );
    }
}

export default App;

