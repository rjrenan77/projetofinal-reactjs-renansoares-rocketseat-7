import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3377',
});

export default api;
