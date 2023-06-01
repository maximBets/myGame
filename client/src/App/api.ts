import { Theme } from '../features/cardPade/reducer/types/type';

// eslint-disable-next-line import/prefer-default-export
export const initFetch = async (): Promise<Theme[]> => {
  const res = await fetch('/api');
  const data = await res.json();
  return data;
};
