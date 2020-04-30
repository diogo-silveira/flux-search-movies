import axios from "axios";

export default axios.create({
  baseURL: "http://www.omdbapi.com/?apikey=efdf9830&v=1",
  responseType: "json"
});