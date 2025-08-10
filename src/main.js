import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onSearchSubmit);

function onSearchSubmit(event) {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      const hits = Array.isArray(data?.hits) ? data.hits : [];

      if (hits.length === 0) {
        iziToast.info({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(hits);
    })
    .catch(() => {
      iziToast.error({
        message: 'Something went wrong while fetching images. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
}