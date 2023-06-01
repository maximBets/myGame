import { combineReducers, createStore } from 'redux';
import flashCardReducer from './features/cardPade/reducer/reducer';

const store = createStore(
  combineReducers({
    flashCardReducer,
  })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
