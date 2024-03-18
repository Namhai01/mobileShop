import axios from "axios";
import { BASE_API } from "../shared/constants/app";
const Http = axios.create({
  baseURL: BASE_API,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

Http.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);
export default Http;
