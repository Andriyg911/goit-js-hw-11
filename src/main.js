import './css/styles.css';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader
} from './js/render-functions.js';

import iziToast from 'izitoast';

const form = document.querySelector('.form');
const input = form.elements['search-text'];

form.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Будь ласка, введіть пошуковий запит!',
      position: 'topRight'
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.info({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight'
      });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight'
    });
  } finally {
    hideLoader();
  }
}