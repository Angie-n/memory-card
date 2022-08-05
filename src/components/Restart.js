const Restart = props => {
    const {cards, currentScore, setCurrentScore, isGameOver, setIsGameOver} = props;

    const resetGame = () => {
        cards.forEach(c => c.alreadySelected = false);
        setIsGameOver(false);
        setCurrentScore(0);
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

export default Restart;