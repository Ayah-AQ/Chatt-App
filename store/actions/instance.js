import axios from "axios";

const instance = axios.create({
  // baseURL: "http://192.168.1.17:8000", // Hayder
  baseURL: "http://192.168.1.17:8000", // Zeid
  // baseURL: "http://192.168.1.17:8000", // Ayah
});

export default instance;
