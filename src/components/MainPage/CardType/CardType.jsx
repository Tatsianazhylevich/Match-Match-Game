import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Shirt1 from '../../../assets/Shirt1.jpg';
import Shirt3 from '../../../assets/Shirt3.jpg';
import Shirt2 from '../../../assets/Shirt2.jpg';

import { chooseCardType } from '../../actions';

export function CardType() {
  const [cardType, setCardType] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(chooseCardType(cardType));
  }, [cardType, dispatch]);

  const onClickFirstShirt = useCallback(() => {
    setCardType(0);
  }, []);

  const onClickSecondShirt = useCallback(() => {
    setCardType(1);
  }, []);

  const onClickThirdShirt = useCallback(() => {
    setCardType(2);
  }, []);

  return (
    <StyledContainer className="cardType">
      <StyledText>Choose the type of shirt...</StyledText>
      <SkirtContainer>
        <Skirt onClick={onClickFirstShirt} src={Shirt1} />
        <Skirt onClick={onClickSecondShirt} src={Shirt2} />
        <Skirt onClick={onClickThirdShirt} src={Shirt3} />
      </SkirtContainer>
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

const SkirtContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
   
`;

const Skirt = styled.img`
  width: 100px;
  height: 150px;
  margin: 10px;
  object-fit: cover;
  cursor: pointer;
  box-shadow: 0 0 5px black;
  

  &:hover {
    opasity: 0.7;
    color: lightblue;
    box-shadow: 0 0 10px black;
    transform: scale(1.1);
  };

  &:focus {
    box-shadow: 1px 4px 8px white;
  };
  
  &:active {
    box-shadow: 0 0 10px white;
    transform: translate(2px);
  };
`;
