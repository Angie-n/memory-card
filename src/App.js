import { useState} from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import * as CardModule from "./helpers/Card";
import "./styles/App.css";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState(CardModule.cards);
  const [isGameOver, setIsGameOver] = useState(false);

  return (
    <div className="App">
      <Header currentScore={currentScore} highScore={highScore}></Header>
      <Game cards={cards} setCards={setCards} currentScore={currentScore} setCurrentScore={setCurrentScore} highScore={highScore} setHighScore={setHighScore} isGameOver={isGameOver} setIsGameOver={setIsGameOver}></Game>
      <GameOver cards={cards} currentScore={currentScore} setCurrentScore={setCurrentScore} isGameOver={isGameOver} setIsGameOver={setIsGameOver}></GameOver>
    </div>
  );
}

export default App;
