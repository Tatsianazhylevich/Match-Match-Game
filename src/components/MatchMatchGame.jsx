import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoginPage } from './LoginPage';
import { MainPage } from './MainPage';
import { bootstrapStart } from './actions';

export function MatchMatchGame() {
  const { isAuthorized, bootstraped } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapStart());
  }, [dispatch]);

  return bootstraped
    ? isAuthorized
      ? <MainPage />
      : <LoginPage />
    : null;
}
