import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Board } from './components';
import { GameOver } from '../GameOver';
import { Button } from '../components/Button';

import { initializeDeck } from './images/Images';

export function GameBoard() {
  const history = useHistory();

  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimention] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [steps, setSteps] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard);

    return () => window.removeEventListener('resize', resizeListener);
  });

  const resizeBoard = () => {
    setDimention(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
      ),
    );
  };

  const handleClick = (id) => {
    setDisabled(true);

    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(flipped, id)) return;

      setFlipped([flipped[0], id]);
      setSteps(steps + 1);

      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards();
      } else {
        setTimeout(resetCards, 1000);
      }

      if (isGameOver()) {
        setGameOver(true);
      }
    }
  };

  const isGameOver = () => {
    if (solved.length === cards.length) return true;
    return false;
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const sameCardClicked = (id) => flipped.includes(id);

  const isMatch = useCallback((id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type;
  }, [cards, flipped]);

  const backToMainPage = useCallback(() => {
    history.push('/MainPage');
  }, [history]);

  const restartGame = useCallback(() => {
    setSteps(0);
    setDisabled(false);
    setFlipped([]);
    setSolved([]);
    setCards(initializeDeck());
    setGameOver(false);
  }, []);

  return (
    <Container>
      <HeaderMenu>
        <Button onClick={backToMainPage}>Main Page</Button>
        <Button onClick={restartGame}>Restart</Button>

        {/* <Timer /> */}
      </HeaderMenu>

      <Board
        dimention={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />

      { gameOver ? (
        <GameOver
          steps={steps}
          onBackToMainClick={backToMainPage}
          onRestartClick={restartGame}
        />
      ) : null}

    </Container>

  );
}

const HeaderMenu = styled.div`
 display: flex;
 justify-content: space-between;
`;
const Container = styled.div`
    width: 800px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    perspective: 1000px;
    

`;
