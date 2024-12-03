import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
});

const HARDCODED_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMzMTg2MzQxLCJpYXQiOjE3MzMxODYwNDEsImp0aSI6IjZjYzY3MmY1MTQxYTQzODQ5YjRlMDc3ZjdlNmRkZGJhIiwidXNlcl9pZCI6MX0.53-b1BNfi9kM-0b3a3WTLPEDcK7GJMvb0s0gCBp4vgg";

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${HARDCODED_TOKEN}`;
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
