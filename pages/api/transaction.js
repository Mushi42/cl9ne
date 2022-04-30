import axios from 'axios'

import { BASE_URL } from '../../constants'
axios.defaults.baseURL = BASE_URL;

export const makeTransaction = async (body) => {
    const resp = await axios.post('/transactions', { ...body })
    if (resp)
        return resp.data.data
}