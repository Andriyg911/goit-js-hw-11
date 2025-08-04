// src/main.js
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
import PixabayApiService from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.getElementById('search-form');
const pixabayService = new PixabayApiService();

form.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();
  const query = event.currentTarget.searchQuery.value.trim();

  if (!query) {
    iziToast.info({ message: 'Введіть пошуковий запит!' });
    return;
  }

  pixabayService.searchQuery = query;
  pixabayService.resetPage();
  clearGallery();

  try {
    showLoader();
    const data = await pixabayService.fetchImages();

    if (data.hits.length === 0) {
      iziToast.warning({ message: 'За вашим запитом нічого не знайдено.' });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    console.error(error);
    iziToast.error({ message: 'Помилка завантаження зображень.' });
  } finally {
    hideLoader();
  }
}
