import Action from './action';
import { State } from './type/type';

export const initState: State = { user: {} };
export const userReducer = (
  state: State = initState,
  action: Action
): State => {
  switch (action.type) {
    case 'user/registr':
      return {
        ...state,
        user: action.payload,
      };
    case 'user/score/update':
      return {
        ...state,
        user: { ...state.user, totalScore: action.payload },
      };
    default:
      return state;
  }
};
