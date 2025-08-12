import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm.js';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${largeImageURL}">
          <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <ul class="gallery__meta">
          <li><b>Likes:</b> ${likes}</li>
          <li><b>Views:</b> ${views}</li>
          <li><b>Comments:</b> ${comments}</li>
          <li><b>Downloads:</b> ${downloads}</li>
        </ul>
      </li>`
    )
    .join('');

  // Одна операція додавання до DOM (за ТЗ)
  galleryEl.innerHTML = markup;

  // Оновити lightbox після додавання нових елементів (за ТЗ)
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('hidden');
}

export function hideLoader() {
  loaderEl.classList.add('hidden');
}