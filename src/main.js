import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import './css/styles.css';
import './css/loader.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();

  if (query === '') {
    iziToast.warning({
      message: 'Введіть пошуковий запит!',
      position: 'topRight',
    });
    return;
  }

  showLoader();
  clearGallery();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({
        message: 'Сталася помилка при завантаженні зображень.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
});