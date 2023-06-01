export type Flash = {
  id: number;
  question: string;
  answer: string;
  score: number;
  theme_id: number;
};

export type Theme = {
  id: number;
  theme: string;
  Flashes: Flash[];
};

export type State = {
  flashCards: Theme[];
};
