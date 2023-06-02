import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore } from 'redux';
import flashCardReducer from './features/cardPade/reducer/reducer';
import {userReducer} from './Users/redux/reducer'

const store = createStore(
  combineReducers({
    flashCardReducer,
    userReducer
  }),
  composeWithDevTools()
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
