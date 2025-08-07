import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
import './css/styles.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.target.elements['search-text'].value.trim();

  if (!query) return;

  clearGallery();
  showLoader();

  try {
    const { hits } = await getImagesByQuery(query); // ✅ Виправлено

    if (hits.length === 0) {
      iziToast.warning({
        title: 'Увага',
        message: 'Нічого не знайдено. Спробуйте інший запит.',
        position: 'topRight',
      });
    } else {
      createGallery(hits); // ✅ Передаємо масив
    }
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: 'Щось пішло не так. Спробуйте пізніше.',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    hideLoader();
  }
});