import React from 'react';
import styled from 'styled-components';
import  Skirt_1 from './Skirt_1.jpg';
import  Skirt_2 from './Skirt_2.jpg';
import  Skirt_3 from './Skirt_3.jpg';
import SkirtBear from './Skirt-Bear.jpg';

import { useDispatch } from 'react-redux';
import {chooseCardType} from '../../actions'

export function CardType() {
    const dispatch = useDispatch();
    return (
        <StyledContainer className='cardType'>
        <StyledText>Choose the type of skirt...</StyledText>
        <SkirtContainer>
            <div><Skirt onClick={() => dispatch(chooseCardType('Skirt_1'))} src={Skirt_1}/></div>
            <div><Skirt onClick={() => dispatch(chooseCardType('SkirtBear'))} src={SkirtBear}/></div>
            <div><Skirt onClick={() => dispatch(chooseCardType('Skirt_3'))} src={Skirt_3}/></div>
            
            
            
        </SkirtContainer>
    </StyledContainer>
    )
}

const StyledContainer = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;

`;

const StyledText = styled.p `
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
  
  &:active {
    box-shadow: 0 0 10px white;
    transform: translate(2px);
  }
`;



