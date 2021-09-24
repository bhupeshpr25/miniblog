import axios from 'axios';

const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://mern-miniblog.herokuapp.com/api/'
    : 'http://localhost:5000/api/';

export const axiosInstance = axios.create({
  baseURL: API_URL,
});
