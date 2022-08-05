import React, { useState, useEffect } from "react";
import "../styles/Game.css";

const Game = props => {
    const {cards, setCards, currentScore, setCurrentScore, highScore, setHighScore, isGameOver, setIsGameOver, setWronglySelectedCard} = props;
    const [randomizedCards, setRandomizedCards] = useState(cards);

    const checkIfCardOrderSame = (oldOrder, newOrder) => {
        if(oldOrder.length !== newOrder.length) return false;
        else {
            for(let i = 0; i < oldOrder.length; i++) {
                if(oldOrder[i].src !== newOrder[i].src) return false;
            }
        }
        return true;
    }

    const getRandomizedOrder = () => {
        let newOrder = [];
        let cardsLeft = [...cards];
        for(let i = 0; i < cards.length; i++) {
            let randomIndex = Math.floor(Math.random() * cardsLeft.length);
            newOrder.push(cardsLeft[randomIndex]);
            cardsLeft.splice(randomIndex, 1);
        }
        return newOrder;
    }

    useEffect(() => {
        let newOrder = [...randomizedCards];
        while(checkIfCardOrderSame(randomizedCards, newOrder)) newOrder = getRandomizedOrder();
        setRandomizedCards(newOrder);
    },[currentScore]);

    useEffect(() => {
        if(isGameOver) {
            document.getElementById("game").style.pointerEvents = "none";
            let cardsDOM = document.getElementById("game").getElementsByTagName("li");
            [...cardsDOM].forEach((card, i) => {
                if(randomizedCards[i].alreadySelected) {
                    let icon = document.createElement("i");
                    icon.classList.add("fa-solid");
                    icon.classList.add("fa-eye");
                    icon.classList.add("seen-icon");
                    card.append(icon);
                }
            });
        }
        else {
            document.getElementById("game").style.filter = "none";
            let highlightedCard = document.getElementById("incorrectly-selected-card");
            if(highlightedCard) highlightedCard.id = "";
            document.getElementById("game").style.pointerEvents = "auto";
            let seenIcons = [...document.getElementsByClassName("seen-icon")];
            seenIcons.forEach(s => s.remove());
        }
    },[isGameOver]);

    const updateCardAsSeen = card => {
        let i = cards.indexOf(card);
        let updatedCards = [...cards];
        updatedCards[i].alreadySelected = true;
        setCards(updatedCards);
    }
    
    const handleCardClick = (event, card) => {
        if(card.alreadySelected) {
            event.currentTarget.id = "incorrectly-selected-card";
            setIsGameOver(true);
            setWronglySelectedCard(card);
        }
        else {
            updateCardAsSeen(card);
            let newScore = currentScore + 1;
            setCurrentScore(newScore);
            if(newScore > highScore) setHighScore(newScore);
            if(newScore === cards.length) setIsGameOver(true);
        }
    }

    return (
        <div id="game">
            <ul>{randomizedCards.map((c,i) => <li onClick={e => {handleCardClick(e, c)}} key={"game-card-" + i} style={{transform: "rotate(" + (Math.random() - 0.5) * 2 + "deg)"}}><img src={c.src} alt={c.description}></img><p>{c.description}</p></li>)}</ul>
        </div>
    );
}

export default Game;