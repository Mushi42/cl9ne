import axios from 'axios'

import { BASE_URL } from '../../constants'
axios.defaults.baseURL = BASE_URL;

export const makeTransaction = async (body, type) => {
    console.log('Body', body)
    const resp = await axios.post('/transactions', { ...body, transactionType: type })
    if (resp)
        return resp.data.data
}

export const findTransactionById = async (id) => {
    const resp = await axios.get(`/transactions/${id}`)
    if (resp)
        return resp.data.data

}