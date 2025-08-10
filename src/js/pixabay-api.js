

import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51566476-370d8ae35b5995096aee585ea'; 


export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  };

  return axios.get(BASE_URL, { params }).then(res => res.data);
}