import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainet = document.querySelector('.gallery');

function createGallery() {
  return galleryItems
    .map(
      ({ preview, description, original }) =>
        `<li>
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`,
    )
    .join('');
}

galleryContainet.insertAdjacentHTML('afterbegin', createGallery());

const lightbox = new SimpleLightbox('.gallery__item', {
  animationSpeed: 250,
  loop: true,
  enableKeyboard: true,
  preloading: true,
  docClose: true,
  captionsData: 'alt',
});
