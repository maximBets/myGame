export type User = {
  id?: number;
  name: string;
  password: string;
  password2?: string;
};

export type State = {
  user: User | {};
};
