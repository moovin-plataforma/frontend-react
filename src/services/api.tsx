import axios from "axios";

const api = axios.create({
  baseURL: "https://gorest.co.in/public/",
});

export default api;
