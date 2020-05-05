import axios from "axios";
import { useState, useCallback,useMemo, useEffect } from  'react';

 const axiosInstance = axios.create({
    baseURL: "http://www.omdbapi.com/?apikey=efdf9830&v=1",
    responseType: "json"
  });

  export const useAxiosLoader = () => {
    const [counter, setCounter] = useState(0);
    const inc = useCallback(() => setCounter(counter => counter + 1), [setCounter]); // add to counter
    const dec = useCallback(() => setTimeout(setCounter(counter => counter - 1), 2000), [setCounter]); // remove from counter
    
    const interceptors = useMemo(() => ({
      request: config => (inc(), config),
      response: response => (dec(), response),
      error: error => (dec(), Promise.reject(error)),
    }), [inc, dec]); // create the interceptors
    
    useEffect(() => {
      // add request interceptors
      const reqInterceptor = axiosInstance.interceptors.request.use(interceptors.request, interceptors.error);
      // add response interceptors
      const resInterceptor =  axiosInstance.interceptors.response.use(interceptors.response, interceptors.error);
      return () => {
        // remove all intercepts when done
        axiosInstance.interceptors.request.eject(reqInterceptor);
        axiosInstance.interceptors.response.eject(resInterceptor);
      };
    }, [interceptors]);
    
    return [counter > 0];
  };

 

export default axiosInstance;