import axios from 'axios';

const APIHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  Authorization: {
    toString() {
      return `Bearer ${localStorage.getItem('token')}`;
    },
  },
};

const API = axios.create({
  baseURL: 'http://localhost:8080',
  headers: APIHeaders,
  timeout: 8000,
});

export default API;
