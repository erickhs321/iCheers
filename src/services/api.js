import { setUserToken } from '../services/async-storage';
import axios from 'axios';

export function Loggin(email, senha) {
  axios.get(`https://icheersvk.appspot.com/Auth/${email}/${senha}`)
    .then(res => {
      console.log(res);
    });
  // setUserToken(JSON.stringify(.token));
}