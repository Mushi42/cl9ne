import axios from 'axios'

import { BASE_URL } from '../../constants'
axios.defaults.baseURL = BASE_URL;

export const getCurrenyData = async () => {
    const resp = await axios.get('/currency')
    if (resp)
        return resp.data.data
} 