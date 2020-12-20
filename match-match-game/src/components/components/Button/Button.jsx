import React, {  } from 'react';
import styled from 'styled-components'

export function Button ({onClick, children}) {

    return <StyledButton onClick={onClick}>{children}</StyledButton>
}

const StyledButton = styled.button `
    margin: 10px;
    padding: 10px 15px;
    border-radius: 6px;
    font-size: 16px;
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
        outline: none;
        box-shadow: 1px 4px 8px white;

    };
    &:active {
        transform: translate(2px);
      }
`