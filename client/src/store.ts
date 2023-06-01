import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore } from 'redux';
import flashCardReducer from './features/cardPade/reducer/reducer';

const store = createStore(
  combineReducers({
    flashCardReducer,
  }),
  composeWithDevTools()
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
