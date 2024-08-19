import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://66bfa33c42533c403146b83b.mockapi.io/contacts/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;