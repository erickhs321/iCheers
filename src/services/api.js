import { getUserUid } from '../services/async-storage';
import axios from 'axios';

const baseUrl = 'https://icheersvk.appspot.com';

export async function registerUser(email, password) {
  let res;
  await axios
    .post(`${baseUrl}/NovoUsuario/${email}/${password}`)
    .then(response => {
      res = response.data;
    })
    .catch(error => {
      res = { error: error.message };
    });

  return res;
}

export async function getChartData() {
  let res;
  await axios
    .get(`${baseUrl}/dashboard/eug19UhWg7hYGqbxOkgj3tdks6p2`)
    .then(response => {
      res = response.data;
    })
    .catch(error => {
      res = { error: error.message };
    });

  return res;
}

export async function getPartnersData() {
  let res;
  await axios
    .get(`${baseUrl}/Parceiros/eug19UhWg7hYGqbxOkgj3tdks6p2`)
    .then(response => {
      res = response.data;
    })
    .catch(error => {
      res = { error: error.message };
    });

  return res;
}
