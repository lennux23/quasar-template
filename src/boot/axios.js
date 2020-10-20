import axios from 'axios';

const api = axios.create({
  baseURL: 'http://dummy.restapiexample.com/public/api/v1',
  timeout: 45000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export { api };
