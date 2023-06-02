import { User } from './redux/type/type';

// eslint-disable-next-line import/prefer-default-export

export const registrFetch = async (obj:User):Promise<User> => {
    const res = await fetch('/auth/register', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(obj)
       });
  const data = await res.json();
  return data;
};

export const loginFetch = async (obj: User): Promise<User> => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await res.json();
  return data;
};
