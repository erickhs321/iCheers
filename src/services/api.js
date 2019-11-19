import { setUserToken } from '../services/async-storage';
import axios from 'axios';

const baseUrl = 'https://icheersvk.appspot.com';

export async function auth(email, password) {
  let res;
  if (email && password) {
    await axios
      .get(`${baseUrl}/Auth/${email}/${password}`)
      .then(response => {
        setUserToken(response.data.Token);
        res = response.data;
      })
      .catch(error => {
        res = { error };
      });
  }

  return res;

  // setUserToken(JSON.stringify(.token));
}
