import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainet = document.querySelector('.gallery');

function createGallery() {
  const galleryMarkup = galleryItems
    .map(({ preview, description }) => {
      return `<li class="gallery__item">
  <img src="${preview}" alt="${description}" class="gallery__image">
</li>`;
    })
    .join('');
  galleryContainet.insertAdjacentHTML('afterbegin', galleryMarkup);
}
createGallery();

function receivingUrl(event) {
  const galleryItem = galleryItems.find(
    ({ description }) => event.target.getAttribute('alt') === description,
  );

  return galleryItem.original;
}

galleryContainet.addEventListener('click', receivingUrl);
