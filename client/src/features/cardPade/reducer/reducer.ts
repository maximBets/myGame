import { Action } from './action';
import { State } from './types/type';

export const initState: State = { flashCards: [] };

const flashCardReducer = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case 'flashcards/init':
      return {
        ...state,
        flashCards: action.payload,
      };

    default:
      return state;
  }
};

export default flashCardReducer;
