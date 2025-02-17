const { default: axios } = require("axios");

const tennisApi = axios.create({
  baseURL: "https://europe-west1-atpenn-4fc94.cloudfunctions.net/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default tennisApi;
