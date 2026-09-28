import axios from "axios";

const instace = axios.create({
  baseURL: "/api",
  withCredentials: true,
});
export default instace;
