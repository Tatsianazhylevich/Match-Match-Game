import React from 'react';
import styled from 'styled-components';

export function GameOver({
  name, steps, onBackToMainClick, onRestartClick,
}) {
  return (
    <StyledGameOver
      className="game-over"
    >
      <h1>Congratulations!!!</h1>
      <p>
        Well played,
        {' '}
        {name}
        !
      </p>
      <p>
        You do it in
        {' '}
        {steps}
        {' '}
        steps
      </p>
      <p>Do you want to play again?</p>
      <div className="btn-block">
        <button className="btn" onClick={onRestartClick}>Restart</button>
        <button className="btn" onClick={onBackToMainClick}>Menu</button>
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #758cac;
    border-radius: 10px;
    width: 300px;
    height: 300px;
    background-color: #acbdc4;
    opacity: 0.8;
`;
