import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';

export function Board({
  disabled, dimention, cards, flipped, handleClick, solved, shirt,
}) {
  return (
    <BoardContainer>
      {cards.map((card) => (
        <Card
          id={card.id}
          type={card.type}
          width={dimention / 4.5}
          flipped={flipped.includes(card.id)}
          solved={solved.includes(card.id)}
          handleClick={handleClick}
          disabled={disabled || solved.includes(card.id)}
          shirt={shirt}
        />
      ))}
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
width: 100%;
// height: 60vh;
margin: 10px;
padding: 10px;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
perspective: 1000px;
background-attachment: fixed;
box-shadow: 1px 4px 8px white;
`;
