import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.56.10:3000/api",
  withCredentials: true,
});

export default instance;
