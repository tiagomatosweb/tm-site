import axios from 'axios';
// import {errorMessage} from '@/utils/helpers';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public
  console.log(config)

  axios.defaults.baseURL = config.apiURL
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;

  // axios.interceptors.response.use(function (response) {
  //   return response;
  // }, function (error) {
  //   const response = error.response
  //   if (response.status === 401) {
  //     const router = useRouter()
  //     return router.push({name: 'logout'})
  //   }
  //
  //   return Promise.reject({message: errorMessage(response.data), status: response.status})
  // });
})
