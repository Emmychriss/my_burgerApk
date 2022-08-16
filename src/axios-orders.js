import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://burgerapk-bc95b-default-rtdb.firebaseio.com/",
});

export default axiosInstance;
