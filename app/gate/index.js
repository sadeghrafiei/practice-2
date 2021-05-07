import api from './api';

const methods = {
  delete: (url, data = {}) => api.delete(url, data),
  get: (url, data = {}) => api.get(url, data),
  patch: (url, data = {}) => api.patch(url, data),
  post: (url, data = {}) => api.post(url, data),
  put: (url, data = {}) => api.put(url, data),
};

const auth = {
  checkMe: () => api.get('check/me'),
  checkUser: () => api.get('check/user'),
  checkVer: () => api.get('check/ver'),

  signIn: (data) => api.post('sign-in', data),
  signInConfirmation: (data) => api.post('sign-in-confirmation', data),

  signOut: () => api.signOut('sign-out'),

  signUp: (data) => api.post('sign-up', data),
  signUpConfirmation: (data) => api.post('sign-up-confirmation', data),
};

const register = (data) => {
  return api.post('/auth/register', data);
};

const verifyCode = (data) => {
  return api.post('/auth/verify' ,data);
};

const login = (data) => {
  return api.post('/auth/login',data);
}

const getPosts = (page,limit) => {
  return api.get(`ig/posts?page=${page}&limit=${limit}`);
}
export default {
  getRepositories: (query) =>
    api.get(`/search/repositories?q=${query}&sort=stars`, {}),
  // any: someId => api.get(`/any/${someId}`),
  // any: data => api.post('/any', data),
  register,
  verifyCode,
  login,
  getPosts,
  ...methods,
  ...auth,
};
