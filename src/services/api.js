import axios from 'axios';

const token = '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';
const api = axios.create({
    baseURL: 'https://api.github.com/',
    headers: {'Authorization': 'Bearer '+token} 
});

export default api;