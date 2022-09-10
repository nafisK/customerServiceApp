import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'});

// need interceptor before all the request
API.interceptors.request.use((req) => {
    // if the token still exists in the local storage
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const signIn = (formData) => API.post('/user/auth', formData);
export const signUp = (formData) => API.post('/user/signup', formData);