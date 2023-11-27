import axios from 'axios';

export const axiosInstance = axios.create({
  // baseURL: 'http://localhost:4000',
  baseURL: 'https://branch-messaging-app-backend.onrender.com/',
  'Content-Type': 'application/json',
});

axiosInstance.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export const registerUser = (data) => {
  const { user_identity, email, password, password_confirmation } = data;
  return axiosInstance.post('/signup', {
    user: {
      email,
      password,
      password_confirmation,
      user_identity,
    },
  });
};

export const userLogin = (data) => axiosInstance.post('/login', { user: data });

export const userLogout = () => axiosInstance.delete('/logout');

export const currentUser = () => {
  const authToken = window.localStorage.getItem('authToken');

  if (!authToken) {
    return null;
  }
  return axiosInstance.get('/current_user', {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
};

