import axios from 'axios';

class ApiClient {
  constructor() {
    this.baseUrl = '/api/rates';
  }

  fetchRates = async () => {
    return axios.get(this.baseUrl);
  }
}

export default ApiClient;
