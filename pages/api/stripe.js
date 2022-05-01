import axios from 'axios';
import { BASE_URL } from '../../constants';
axios.defaults.baseURL = BASE_URL;

export const chargePayment = async (body) => {
  try {
    const response = await axios.post('/stripe/charge', body);
    if (response) return response.data;
  } catch (error) {
    console.log(error);
  }
};
