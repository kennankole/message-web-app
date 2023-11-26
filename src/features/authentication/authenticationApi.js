import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
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
  console.log(data)
  const { customer_user_id, email, password, password_confirmation } = data;
  return axiosInstance.post('/signup', {
    user: {
      email,
      password,
      password_confirmation,
      customer_user_id
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

export const forgotPasswordApi = (email) => {
  axiosInstance.post('/password', {
    email,
  });
};

export const changePasswordApi = (data) => {
  const { resetPasswordToken, formData } = data;
  axiosInstance.put('/password', {
    reset_password_token: resetPasswordToken,
    password: formData.password,
    password_confirmation: formData.passwordConfirm,
  });
};

export const resendConfirmationLinkApi = (email) => {
  axiosInstance.post('/confirmation', {
    email,
  });
};

export const confirmAccountApi = (token) => {
  axiosInstance.get(`/confirmation?confirmation_token=${token}`);
};
export const getAllTechnicians = (data) => axiosInstance.get(`/api/v1/users/${data.id}/technicians`);