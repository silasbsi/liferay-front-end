import axios from 'axios';

const token = '';
const api = axios.create({
    baseURL: 'https://api.github.com/',
    headers: {'Authorization': 'Bearer '+token} 
});

export default api;