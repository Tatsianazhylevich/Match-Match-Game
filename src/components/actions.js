export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const BOOTSTRAP_START = 'BOOTSTRAP_START';
export const BOOTSTRAP_FINISH = 'BOOTSTRAP_FINISH';

export const DIFFICULTY = 'DIFFICULTY';
export const CARDTYPE = 'CARDTYPE';

export const loginRequest = (userName) => ({
  type: LOGIN_REQUEST,
  payload: userName,
});

export const loginSuccess = (userName) => ({
  type: LOGIN_SUCCESS,
  payload: userName,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const logout = () => ({
  type: LOGOUT,
});

export const bootstrapStart = () => ({
  type: BOOTSTRAP_START,
});

export const bootstrapFinish = () => ({
  type: BOOTSTRAP_FINISH,
});

export const chooseDifficulty = (difficultyGame) => ({
  type: DIFFICULTY,
  payload: difficultyGame,
});

export const chooseCardType = (cardType) => ({
  type: CARDTYPE,
  payload: cardType,
});
