import { LOGIN_SUCCESS, LOGIN_FAILURE, BOOTSTRAP_FINISH} from './actions'

import { DIFFICULTY, CARDTYPE } from './actions';


const initialState ={
    isAuthorized: false,
    bootstraped: false,
    userName: '',
    difficultyGame: '',
    cardType: '',
}

export function GameReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isAuthorized: true,
                userName: action.payload,
            }
        }
        
        case LOGIN_FAILURE: {
            return {
                ...state,
                isAuthorized: false,
            }
        }

        case BOOTSTRAP_FINISH: {
            return {
                ...state,
                bootstraped: true,
            }
        }

        case DIFFICULTY: {
            return {
                ...state,
                difficultyGame: action.payload,
            }
        }

        case CARDTYPE: {
            return {
                ...state,
                cardType: action.payload,
            }
        }

        default: return state;

    }
}