/*export function renderImageCards(images) {
  return images
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
    <div class="photo-card">
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${likes}</p>
        <p><b>Views:</b> ${views}</p>
        <p><b>Comments:</b> ${comments}</p>
        <p><b>Downloads:</b> ${downloads}</p>
      </div>
    </div>
  `
    )
    .join('');
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

export function appendImagesToGallery(markup) {
  document.querySelector('.gallery').insertAdjacentHTML('beforeend', markup);
}*/

export function renderImageCards(images) {
  return images
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
    <div class="photo-card">
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${likes}</p>
        <p><b>Views:</b> ${views}</p>
        <p><b>Comments:</b> ${comments}</p>
        <p><b>Downloads:</b> ${downloads}</p>
      </div>
    </div>
  `
    )
    .join('');
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

export function appendImagesToGallery(markup) {
  document.querySelector('.gallery').insertAdjacentHTML('beforeend', markup);
}
