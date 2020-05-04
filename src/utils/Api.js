import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import {
    createError,
    displayLoading,
} from '../features/movies/moviesSlice';

const axiosInstance = axios.create({
  baseURL: "http://www.omdbapi.com/?apikey=efdf9830&v=1",
  responseType: "json"
});

axiosInstance.interceptors.request.use(config => {
  console.log('Request was sent');
  return config;
}, error => {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response) => {
  console.log('Response was received');
  return response;
}, error => {
    return Promise.reject(error);
});

export default axiosInstance;