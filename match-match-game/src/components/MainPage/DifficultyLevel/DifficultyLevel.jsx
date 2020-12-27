import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Button } from '../../components/Button';
import { chooseDifficulty } from '../../actions';

export function DifficultyLevel() {
  const [activeLevel, setActiveLevel] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(chooseDifficulty(activeLevel));
  }, [dispatch, activeLevel]);

  const onClickEasy = useCallback(() => {
    setActiveLevel('Easy');
  }, []);

  const onClickMedium = useCallback(() => {
    setActiveLevel('Medium');
  }, []);

  const onClickHard = useCallback(() => {
    setActiveLevel('Hard');
  }, []);

  return (
    <StyledContainer className="difficulty">
      <StyledText>Choose the difficulty level...</StyledText>

      <div>
        <Button className="easy" onClick={onClickEasy}>Easy</Button>
        <Button className="medium" onClick={onClickMedium}>Medium</Button>
        <Button className="hard" onClick={onClickHard}>Hard</Button>
      </div>

    </StyledContainer>

  );
}

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;

`;
const StyledText = styled.p`
    margin: 0;
    font-size: 30px;
    color: white;
    text-shadow: 1px 1px 1px black, 0 0 .3em white;
`;
