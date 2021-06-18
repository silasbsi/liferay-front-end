import axios from 'axios';

const token = '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';
const api = axios.create({
    baseURL: 'https://api.github.com/',
    headers: {'Authorization': 'Bearer '+token} 
});

export default api;