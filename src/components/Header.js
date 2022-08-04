import React from "react";
import "../styles/Header.css";

const Header = props => {
    const {currentScore, highScore} = props;
    const ScoreBoard = () => {
        return (
            <div id="scoreboard">
                <p>Current Score: {currentScore}</p>
                <p>High Score: {highScore}</p>
            </div>
        );
    };

    return (
        <header>
            <h1>Memory Game</h1>
            <ScoreBoard></ScoreBoard>
        </header>
    );
}

export default Header;
