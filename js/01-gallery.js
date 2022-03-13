import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainet = document.querySelector('.gallery');

function createGallery() {
  const galleryMarkup = galleryItems
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
  <img src="${preview}" alt="${description}" class="gallery__image">
  </a>
</div>`;
    })
    .join('');
  galleryContainet.insertAdjacentHTML('afterbegin', galleryMarkup);
}
createGallery();

function openOriginalImg(event) {
  window.addEventListener('keydown', closedOriginalImg);
  event.preventDefault();
  const galleryItem = galleryItems.find(
    ({ description }) => event.target.getAttribute('alt') === description,
  );
  const instance = basicLightbox.create(`<img src="${galleryItem.original}">`);
  instance.show();
}

function closedOriginalImg(event) {
  if (event.code === 'Escape') {
    document.querySelector('.basicLightbox').remove();
  }
  window.removeEventListener('keydown', closedOriginalImg);
}

galleryContainet.addEventListener('click', openOriginalImg);
