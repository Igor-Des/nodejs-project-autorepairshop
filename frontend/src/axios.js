import axios from 'axios';

// чтобы не дописывать весь путь в запросах на бэк
const instance = axios.create({
    baseURL: 'http://localhost:3001',
});

export default instance;