import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.request.use((config) => {
  const user = window.localStorage.getItem('user');
  const data = user !== null ? JSON.parse(user) : null;

  if (data !== null) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    config.headers.Authorization = `${data.token}`;
  }
  return config;
});

export {api};
