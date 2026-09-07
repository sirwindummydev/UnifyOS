import axios from "axios"

const api = axios.create({
  baseURL: "http://vendoros.localhost:8000/",
});

export default api;