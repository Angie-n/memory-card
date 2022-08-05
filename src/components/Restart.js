import "../styles/Restart.css";

const Restart = props => {
    const {cards, currentScore, setCurrentScore, isGameOver, setIsGameOver, wronglySelectedCard, setWronglySelectedCard} = props;

    const resetGame = () => {
        cards.forEach(c => c.alreadySelected = false);
        setIsGameOver(false);
        setCurrentScore(0);
        setWronglySelectedCard(null);
    }
    
    const PopUp = () => {
        if(!isGameOver) return <></>;
        else {
            const Quote = () => {
                let description;
                let quote;
                if(wronglySelectedCard == null) {
                    description = "Michael Scott";
                    quote = "You need to play to win. But you also need to win to play.";
                }
                else {
                    let randomQuoteIndex = Math.floor(Math.random() * wronglySelectedCard.quotes.length);
                    description = wronglySelectedCard.description;
                    quote = wronglySelectedCard.quotes[randomQuoteIndex];
                };
                return (
                    <>
                        <p>An inspirational quote from {description}</p>
                        <blockquote>"{quote}"</blockquote>
                    </>
                );
            };

            document.getElementById("game").style.filter = "blur(2px)";
            let title = "Game Over";
            if(currentScore === cards.length) title = "You Won!";
            return (
            <div id="restart">
                <h2>{title}</h2>
                <Quote></Quote>
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