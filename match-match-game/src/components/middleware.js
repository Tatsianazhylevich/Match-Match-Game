import {LOGIN_REQUEST, loginSuccess, loginFailure, BOOTSTRAP_START, bootstrapFinish } from './actions'

export const loginMiddleware = (store) => (next) => (action) => {
    if(action.type === LOGIN_REQUEST) {
        try{
            localStorage.setItem('isAuthorized', action.payload);
            store.dispatch(loginSuccess(localStorage.getItem('isAuthorized')));
        } catch(_e) {
            store.dispatch(loginFailure());
        }
        
    }

    next(action);
};


export const bootstrapMiddleware = store => next => action => {
    if(action.type === BOOTSTRAP_START) {
        const isAuthorized = localStorage.getItem('isAuthorized');

        if(isAuthorized) {
            store.dispatch(loginSuccess(isAuthorized));
        }else{
            store.dispatch(loginFailure());
        }

        store.dispatch(bootstrapFinish());
    }
    next(action);
} 