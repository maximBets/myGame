export type User = {
  id?: number;
  name?: string;
  password?: string;
  password2?: string;
  totalScore?: number;
};

export type State = {
  user: User;
};

export type UserScore = User['totalScore'];
