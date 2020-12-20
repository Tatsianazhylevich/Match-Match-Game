import React, { useEffect, useState } from 'react';
import { LoginPage } from './LoginPage';
import { MainPage} from './MainPage';
import {bootstrapStart} from './actions'
import { useSelector, useDispatch } from 'react-redux';
// import styled from 'styled-components';

export function MatchMatchGame(){
    const { isAuthorized, bootstraped, } = useSelector((state) => state.game);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(bootstrapStart());
    }, [dispatch]);

    return bootstraped 
    ? isAuthorized
        ? <MainPage />
        :  <LoginPage />
    : null
}