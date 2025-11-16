import axios from "axios";

const MOCKAROO_API_KEY = '468123a0';

export const api = axios.create({
    baseURL: 'https://my.api.mockaroo.com',
    headers: {
        'Content-Type': 'application/json',
        'X-API-Key': MOCKAROO_API_KEY
    }
}

);