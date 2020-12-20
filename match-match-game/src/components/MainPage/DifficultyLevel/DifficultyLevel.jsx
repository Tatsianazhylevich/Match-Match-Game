import React, { useState, useCallback} from 'react';
import { Button } from '../../components/Button';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {chooseDifficulty} from '../../actions'

export function DifficultyLevel() {
    const {chooseLevel, setChooseLevel} = useState('Easy');
    const dispatch = useDispatch();

    const LevelEasy = useCallback(() => {
        dispatch(chooseDifficulty('Easy'))
    }, [dispatch]);

    const LevelMedium = useCallback(() => {
        dispatch(chooseDifficulty('Medium'))
    }, [dispatch]);

    const LevelHard = useCallback(() => {
        dispatch(chooseDifficulty('Hard'))
    }, [dispatch]);

    return (
        <StyledContainer className='difficulty'>
            <StyledText>Choose the difficulty level...</StyledText>
            <div>
                <Button onClick={LevelEasy}>Easy</Button>
                <Button onClick={LevelMedium}>Medium</Button>
                <Button onClick={LevelHard}>Hard</Button>
            </div>
        </StyledContainer>
                    
        
    )
}

const StyledContainer = styled.div `
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