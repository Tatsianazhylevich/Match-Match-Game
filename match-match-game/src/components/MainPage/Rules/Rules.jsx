import React from 'react';
import styled from 'styled-components';


export function Rules() {

    return (
        <>
        <StyledRulesPage className='rules'>
             
            <StyledText> Rules: </StyledText>
            <StyledList>
                <StyledRules>Select two cards to try to match the pictures</StyledRules>
                <StyledRules>If you match the pictures you can go again</StyledRules>
                <StyledRules>If they don't match it is the computer turn them</StyledRules>
                <StyledRules>The player that finds all pairs wins!</StyledRules>
                <StyledRules>Have Fun!</StyledRules>
            </StyledList>
        </StyledRulesPage>
        </>
    )
}

const StyledRulesPage = styled.div `
    justify-content: center;
    text-align: center;
    flex-direction: column;
`;

const StyledList = styled.ul `
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 0;
`;

const StyledText = styled.h2 `
    margin: 0;
    font-size: 30px;
    color: white;
    text-shadow: 1px 1px 1px black, 0 0 .3em white;
`

const StyledRules = styled.li `
    margin: 0 15px;
    text-align: center;
    font-size: calc(15px + 1vh);
    color: white;
    text-shadow: 1px 1px 1px black, 0 0 .3em white;
    list-style-type: none;

    &:nth-child(1):hover {
        cursor: pointer;
        text-shadow: 1px 1px 1px black, 0 0 .3em #3583b1;
       
    }
      
    &:nth-child(2):hover {
        cursor: pointer;
        text-shadow: 1px 1px 1px black, 0 0 .3em #3583b1;
        
    }
     
    &:nth-child(3):hover {
        cursor: pointer;
        text-shadow: 1px 1px 1px black, 0 0 .3em #3583b1;
       
    }
     
    &:nth-child(4):hover {
        cursor: pointer;
        text-shadow: 1px 1px 1px black, 0 0 .3em #3583b1;
       
    }

    &:nth-child(5):hover {
        cursor: pointer;
        text-shadow: 1px 1px 1px black, 0 0 .3em #3583b1;
       
    }
     
    
`