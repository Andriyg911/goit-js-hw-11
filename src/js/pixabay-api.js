import axios from 'axios';

const API_KEY = '51566476-370d8ae35b5995096aee585ea';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}