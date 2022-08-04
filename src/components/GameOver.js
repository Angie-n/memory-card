const GameOver = props => {
    const {cards, currentScore, setCurrentScore, isGameOver, setIsGameOver} = props;

    const resetGame = () => {
        document.getElementById("game").style.filter = "none";
        cards.forEach(c => c.alreadySelected = false);
        setIsGameOver(false);
        setCurrentScore(0);
        let highlightedCard = document.getElementById("incorrectly-selected-card");
        if(highlightedCard) highlightedCard.id = "";
        document.getElementById("game").style.pointerEvents = "auto";
        let seenIcons = [...document.getElementsByClassName("seen-icon")];
        seenIcons.forEach(s => s.remove());
    }
    
    const PopUp = () => {
        if(!isGameOver) return <></>;
        else {
            document.getElementById("game").style.filter = "blur(2px)";
            let title = "Game Over";
            if(currentScore === cards.length) title = "You Won!";
            return (
            <div id="game-over">
                <h2>{title}</h2>
                <button type="button" onClick={() => resetGame()}>Play Again</button>
            </div>
            );
        }
    };

    return (
        <PopUp></PopUp>
    );
}

export default GameOver;