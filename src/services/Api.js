import axios from "axios";

const API_ROOT = process.env.URI || "http:/localhosr:3000";
const TIMEOUT = 20000;
const HEADERS = {
  "Content-type": "application/json",
  Accept: "application/json"
};

// This class is responsible to make a request with default base urls
class ApiService {
  constructor({
    baseURL = API_ROOT,
    timeout = TIMEOUT,
    headers = HEADERS,
    auth
  }) {
    const client = axios.create({
      baseURL,
      timeout,
      headers,
      auth
    });

    client.interceptors.response.use(this.handleSuccess, this.handleError);
    this.client = client;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(path) {
    return this.client.get(path).then(response => response.data);
  }

  post(path, payload) {
    return this.client.post(path, payload).then(response => response.data);
  }
  patch(path, payload) {
    return this.client.post(path, payload).then(response => response.data);
  }

  delete(path) {
    return this.client.get(path).then(response => response.data);
  }
}

export default ApiService;
