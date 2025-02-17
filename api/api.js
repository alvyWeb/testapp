import axios from "axios";
import Cookies from "js-cookie";

const Api = axios.create({
  // baseURL: process.env.NEXT_BASE_URL,
  baseURL: "https://europe-west1-atpenn-4fc94.cloudfunctions.net/api",
  // baseURL:
  //   "https://www.goalserve.com/getfeed/2ef8ed40e1c74a4a194c08dc48166993/tennis_scores",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
Api.interceptors.request.use(
  function (config) {
    const token = Cookies.get("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default Api;
