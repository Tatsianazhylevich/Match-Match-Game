import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import useSound from 'use-sound';
import { logout } from '../actions';
import { DifficultyLevel } from './DifficultyLevel';
import { CardType } from './CardType';
import { Button } from '../components/Button';

import JingleBells from '../../sounds/JingleBells.mp3';

export function MainPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [playOn] = useSound(
    JingleBells,
    { volume: 0.25 },
  );

  const getMusic = () => {
    if (isChecked) {
      return '';
    } return playOn;
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const goToGameBoard = useCallback(() => {
    history.push('/GameBoard');
  }, [history]);

  const getReadRules = useCallback(() => {
    history.push('/Rules');
  }, [history]);

  const pushTologout = useCallback(() => {
    dispatch(logout());
    history.push('/autorization');
  }, [dispatch, history]);

  return (
    <StyledMainPage>
      <Button onClick={pushTologout}>Logout</Button>

      <DifficultyLevel />
      <CardType />

      <Button onClick={getReadRules}> Read more </Button>
      <StyledText>...and now let's start!</StyledText>
      <ButtonGo type="submit" onClick={goToGameBoard}>GO!</ButtonGo>
      <div>
        <StyledText> Sound</StyledText>
        <input
          type="checkbox"
          checked={isChecked}
          size={30}
          onChange={() => setIsChecked(getMusic())}
        />
      </div>

    </StyledMainPage>

  );
}

const StyledMainPage = styled.div`
    width: 70%;
    margin: 0 auto;
    text-align: center;
`;
const StyledText = styled.p`
    margin: 0;
    font-size: 30px;
    color: white;
    text-shadow: 1px 1px 1px black, 0 0 .3em white;
`;
const ButtonGo = styled.button`
    margin: 10px;
    padding: 10px 15px;
    border-radius: 6px;
    font-size: 25px;
    border: solid;
    color: #7c8ca5;
    cursor: pointer;
    &:hover {
        opasity: 0.7;
        color: lightblue;
        box-shadow: 1px 4px 8px white;
        transform: scale(1.1);
    };

    &:focus {
        outline: 0;

    };
    &:active {
        transform: translate(2px);
    }
`;
