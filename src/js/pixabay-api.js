// src/js/pixabay-api.js
import axios from 'axios';

export default class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 40;
    this.API_KEY = '51566476-370d8ae35b5995096aee585ea';
    this.BASE_URL = 'https://pixabay.com/api/';
  }

  async fetchImages() {
    const params = {
      key: this.API_KEY,
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.page,
      per_page: this.perPage,
    };

    const response = await axios.get(this.BASE_URL, { params });
    this.incrementPage();
    return response.data;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
