import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:5254/api";
const responseBody = (response: AxiosResponse) => response.data;

const httpMethod = {
  get: (url: string, params: object) =>
    axios.get(url, params).then(responseBody),
  post: (url: string, body: object) => {
    axios.post(url, body).then(responseBody);
  },
  put: (url: string, body: object) => axios.put(url, body).then(responseBody),
  delete: (url: string, params: object) =>
    axios.delete(url, params).then(responseBody),
};

export default httpMethod;
