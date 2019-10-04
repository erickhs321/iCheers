import { setUserToken } from '../services/async-storage';

export const login = async (username, password) => {
  const userData = {
    token: '6555149815',
    name: 'Erick Henrique dos Santos',
    email: 'erickhenrique321@gmail.com',
    password: '12345',
  };

  setUserToken(JSON.stringify(userData.token));
};
