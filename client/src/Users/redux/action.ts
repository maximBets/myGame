import { User, UserScore } from './type/type';

type Action =
  | { type: 'user/registr'; payload: User }
  | { type: 'user/score/update'; payload: UserScore };

export default Action;
