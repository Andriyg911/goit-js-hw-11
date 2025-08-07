const gallery = document.querySelector('.gallery');

const lightbox = new window.SimpleLightbox('.gallery a', {
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
    <li>
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
      <div class="stats">
        <span>👍 ${likes}</span>
        <span>👁️ ${views}</span>
        <span>💬 ${comments}</span>
        <span>⬇️ ${downloads}</span>
      </div>
    </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader').hidden = false;
}

export function hideLoader() {
  document.querySelector('.loader').hidden = true;
}