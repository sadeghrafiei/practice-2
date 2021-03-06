import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

import tokenHelper from 'helpers/token';
import {API_URL} from 'helpers/constants';
import gate from './index';

const client = axios.create({baseURL: API_URL, json: true});

const call = async (method, url, data = {}) => {
  const token = await tokenHelper.get();
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  client.interceptors.request.use(
    async (config) => {
      try {
        const token = await tokenHelper.get();
        config.headers.Authorization = token ? `Bearer ${token}`: '';
      
       // console.log('config*',config)        
      } catch (error) {
        console.log(error)
      }

      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  client.interceptors.response.use(
    function (response) {
      //console.log(response);
      if (response.data.status == 'FAIL') {
        //alert(response?.data?.message?.[0]);
      } else if (response.data.status == 'SUCCESS') {
        //alert(response?.data?.message?.[0]);
        response.config.data = gate.getPosts(data)
      }
     
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    },
  );

  if (token !== '') {
    headers.Authorization = `Bearer ${token}`;
  }

  const request = {headers, method, url};

  if (!isEmpty(data)) {
    if (method !== 'get') {
      request.data = data;
    } else {
      request.params = data;
    }
  }

  try {
    const response = await client(request);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response);
  }
};

const auth = {
  async signOut(url) {
    const token = await tokenHelper.get();

    token.clear();
    call('post', url);
  },
};

export default {
  ...auth,

  delete: (url, data = {}) => call('delete', url, data),
  get: (url, data = {}) => call('get', url, data),
  patch: (url, data = {}) => call('patch', url, data),
  post: (url, data = {}) => call('post', url, data),
  put: (url, data = {}) => call('put', url, data),
};
