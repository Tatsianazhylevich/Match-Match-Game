import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';

export function GameOver({
  name, steps, onBackToMainClick, onRestartClick,
}) {
  return (
    <StyledGameOver
      className="game-over"
    >
      <h1>Congratulations!!!</h1>
      <StyledText>
        Well played,
        {' '}
        {name}
        !
      </StyledText>
      <StyledText>
        You do it in
        {' '}
        {steps}
        {' '}
        steps
      </StyledText>
      <StyledText>Do you want to play again?</StyledText>
      <div className="btn-block">
        <Button className="btn" onClick={onRestartClick}>Restart</Button>
        <Button className="btn" onClick={onBackToMainClick}>Menu</Button>
      </div>
    </StyledGameOver>

  );
}

const StyledGameOver = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #758cac;
    border-radius: 10px;
    width: 300px;
    height: 350px;
    background-color: #acbdc4;
    opacity: 0.9;
`;

const StyledText = styled.p`
    margin: 0;
    font-size: 20px;
    color: black;
`;
