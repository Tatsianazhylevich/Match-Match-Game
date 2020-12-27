import { combineReducers } from 'redux';
import { GameReducer } from '../components/reducer';

export const rootReducer = combineReducers({
  game: GameReducer,
});
