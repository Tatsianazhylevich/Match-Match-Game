import {
  LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, BOOTSTRAP_FINISH, DIFFICULTY, CARDTYPE,
} from './actions';

const initialState = {
  isAuthorized: false,
  bootstraped: false,
  userName: '',
  difficultyGame: 6,
  cardType: 0,
};

export function GameReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthorized: true,
        userName: action.payload,
      };
    }

    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuthorized: false,
      };
    }

    case BOOTSTRAP_FINISH: {
      return {
        ...state,
        bootstraped: true,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        isAuthorized: false,
        userData: {},
      };
    }

    case DIFFICULTY: {
      return {
        ...state,
        difficultyGame: action.payload,
      };
    }

    case CARDTYPE: {
      return {
        ...state,
        cardType: action.payload,
      };
    }

    default: return state;
  }
}
