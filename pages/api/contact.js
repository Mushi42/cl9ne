import axios from 'axios'
import { BASE_URL } from '../../constants'
axios.defaults.baseURL = BASE_URL;

// import nodemailer from 'nodemailer';
// import sgTransport from 'nodemailer-sendgrid-transport';

// const transporter = {
//     auth: {
//         // Use SendGrid API key 
//         api_key: '###'
//     }
// }

// const mailer = nodemailer.createTransport(sgTransport(transporter));

export const postMessage = async (body) => {
    try {
        console.log(body)
        const response = await axios.post('/contact', body);

        console.log(response)
        if (response)
            return response.data.data
    } catch (error) {
        console.log(error);
    }
}