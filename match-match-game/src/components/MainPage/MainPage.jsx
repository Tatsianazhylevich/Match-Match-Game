import React, { useEffect, useState } from 'react';
import { DifficultyLevel } from './DifficultyLevel';
import { CardType } from './CardType';
import { Rules } from './Rules';
import { Button } from '../components/Button'

import styled from 'styled-components';


export function MainPage(){
    
    const [options, setOptions] = useState(null)

    // useEffect(() => {
    //     const ReadMore = 
    // }, [])

    return (
            <StyledMainPage>
                <DifficultyLevel />
                <CardType />    
                    
                    <div>
                        <Button > Read more </Button>
                        <StyledText>...and now let's start!</StyledText>
                        <ButtonGo>GO!</ButtonGo>
                        

                        <Rules/>
                    </div>
            </StyledMainPage>
    );
}

const StyledMainPage = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`
const StyledText = styled.p `
    margin: 0;
    font-size: 30px;
    color: white;
    text-shadow: 1px 1px 1px black, 0 0 .3em white;
`


const ButtonGo = styled.button `
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
`