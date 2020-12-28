import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Board } from './components';
import { GameOver } from '../GameOver';
import { Button } from '../components/Button';

import ChristmasTree from '../../assets/cards/ChristmasTree.jpg';
import LittleDeer from '../../assets/cards/LittleDeer.jpg';
import Rabbit from '../../assets/cards/Rabbit.jpg';
import Bool from '../../assets/cards/Bool.jpg';
import Sheep from '../../assets/cards/Gnome.jpg';
import Girl from '../../assets/cards/Girl.jpg';
import Car from '../../assets/cards/Car.jpg';
import Love from '../../assets/cards/Love.jpg';
import Gingerbread from '../../assets/cards/Gingerbread.jpg';
import Sock from '../../assets/cards/Sock.jpg';
import Cap from '../../assets/cards/Cap.jpg';
import Children from '../../assets/cards/Children.jpg';

export function GameBoard() {
  const history = useHistory();

  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimention] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [steps, setSteps] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const userName = useSelector((state) => state.game.userName);
  const difficulty = useSelector((state) => state.game.difficultyGame);

  function shuffle(array) {
    const newArray = array.slice(0);
    for (let i = 0; i < array.length - 1; i += 1) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temp = newArray[i];
      newArray[i] = newArray[randomIndex];
      newArray[randomIndex] = temp;
    }
    return newArray;
  }

  function initializeDeck() {
    let id = 0;
    const imageCards = [
      { name: 'ChristmasTree', front: ChristmasTree },
      { name: 'LittleDeer', front: LittleDeer },
      { name: 'Rabbit', front: Rabbit },
      { name: 'Bool', front: Bool },
      { name: 'Sheep', front: Sheep },
      { name: 'Girl', front: Girl },
      { name: 'Car', front: Car },
      { name: 'Love', front: Love },
      { name: 'Gingerbread', front: Gingerbread },
      { name: 'Sock', front: Sock },
      { name: 'Cap', front: Cap },
      { name: 'Children', front: Children },
    ].slice(0, difficulty).reduce((acc, type) => {
      acc.push({
        id: id += 1,
        type: type.front,
        key: id,
      });
      acc.push({
        id: id += 1,
        type: type.front,
        key: id,
      });
      return acc;
    }, []);
    return shuffle(imageCards);
  }

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

  const handleClick = useCallback((id) => {
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
  }, [flipped, solved, steps]);

  const isGameOver = () => {
    if (solved.length === cards.length) {
      return setGameOver(true);
    }
    return setGameOver(false);
  };
  console.log(solved);
  console.log(cards);
  console.log(gameOver);

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
    history.push('/GameBoard');
    setGameOver(false);
    setSteps(0);
    setDisabled(false);
    setFlipped([]);
    setSolved([]);
    setCards(initializeDeck());
  }, [history]);

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
          name={userName}
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
