import { BASE_URL } from '../constants/index';

const api = {
  companies: `${BASE_URL}/companies`,
  items: `${BASE_URL}/items?_page=7&_limit=20`,
};

export default api;
