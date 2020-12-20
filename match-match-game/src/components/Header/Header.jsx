import React from 'react';
import styled from 'styled-components'


export function Header() {
    return(
        <StyledHeader className='header'>
            <StyledTitle>Christmas Match-Match Game</StyledTitle>
        </StyledHeader>
    )
}

const StyledHeader=styled.header `
    margin: 0 auto;
    text-align: center;
`

const StyledTitle =styled.h1 `
  color: white;
  font-size: 5vh;
  text-shadow: 2px 2px 2px black, 0 0 .2em white;
`