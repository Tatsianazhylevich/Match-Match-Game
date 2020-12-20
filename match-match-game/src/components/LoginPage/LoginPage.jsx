import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button } from '../components/Button'
import {loginRequest} from '../actions'

export function LoginPage() {
    const [userName, setUserName] = useState(``);
    const onChangeInput  = (event) => {setUserName(event.target.value)};
    const dispath = useDispatch();

    const login = useCallback(() => {
        setUserName('');
        dispath(loginRequest(userName));
    }, [dispath, userName])
    
    return(
        <StyledLoginPage onSubmit={(e) => e.preventDefault()}>
            <div>
            <StyledText>Hello, my dear! What is your name?</StyledText>
            </div>
            <div>
            <LoginInput value={userName} onChange={onChangeInput} type="text"/>
            <Button onClick={login}>Login</Button>
            </div>
            
        </StyledLoginPage>
    )
}

const StyledLoginPage = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

const LoginInput = styled.input `
    margin: 10px;
    border: 2px solid #7c8ca5;
    height: 40px;
    border-radius: 10px;
    width: 240px;
    font-family: cursive;
    font-size: 20px;
    color: #7c8ca5;
    &:focus {
        outline: none;
    }
`
const StyledText = styled.p `
    display: flex;

    margin: 0;
    font-size: 30px;
    color: white;
    text-shadow: 1px 1px 1px black, 0 0 .3em white;
`
