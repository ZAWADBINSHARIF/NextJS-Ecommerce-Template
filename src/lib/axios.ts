import { STORE_NOT_FOUND } from '@/constant';
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        config.headers['X-Origin-Domain'] = window.location.hostname;
    }
    return config;
});

api.interceptors.response.use((response) => {
    // success
    return response;
},
    (error) => {
        if (error.response?.status === 404) {
            const message = error.response.data;

            if (message.error == STORE_NOT_FOUND) {
                window.location.href = "/not-found";
            }
        }

        return Promise.reject(error);
    });

export default api;
