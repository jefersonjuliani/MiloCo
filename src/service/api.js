import axios from "axios";

const api = axios.create({
  baseURL: "http://portal.greenmilesoftware.com/",
});

export default api;
