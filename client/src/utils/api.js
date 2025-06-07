import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

//Create an axios instance
const API = axios.create({
  baseURL: `${API_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;




