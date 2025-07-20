import axios from 'axios';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public

  axios.defaults.baseURL = config.apiURL
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;

  axios.interceptors.response.use(function (response) {
    if (process.server && !response.data && typeof response === 'object') {
      return {...response, data: response};
    }

    return response?.data;
  }, function (error) {
    const response = error.response
    return Promise.reject({message: globalErrorMessage(response?.data?.error), status: response?.status})
  });
})
