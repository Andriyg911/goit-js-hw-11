import axios from 'axios';

const API_KEY = '51566476-370d8ae35b5995096aee585ea';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
  .then(response => response.data);
}