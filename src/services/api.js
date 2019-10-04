import { setUserToken } from '../services/async-storage';

export const login = async (username, password) => {
  const token = '6555149815';
  setUserToken(token);
};
