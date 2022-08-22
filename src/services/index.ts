import axios from 'axios';

import { API_BASE_URL } from '../shared/config';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export default apiClient;
