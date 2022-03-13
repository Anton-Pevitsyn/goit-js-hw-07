import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainet = document.querySelector('.gallery');

function createGallery() {
  const galleryMarkup = galleryItems
    .map(({ preview, description, original }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
  galleryContainet.insertAdjacentHTML('afterbegin', galleryMarkup);
}
createGallery();

function openOriginalImg(event) {
  event.preventDefault();
  const gallery = new SimpleLightbox('.gallery a');
  console.log();
  const galleryItem = galleryItems.find(
    ({ description }) => event.target.getAttribute('alt') === description,
  );

  gallery.open(galleryItem);
}

galleryContainet.addEventListener('click', openOriginalImg);
