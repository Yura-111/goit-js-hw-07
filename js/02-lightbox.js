import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const newGalleryItems = galleryItems.map((items) =>
`<div class="gallery__item">
    <a class="gallery__link" href="${items.original}">
        <img
            class="gallery__image"
            src="${items.preview}"
            alt="${items.description}"
        />
    </a>
</div>`
).join("");

gallery.innerHTML = newGalleryItems;

const instance = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: "alt"});
    instance.open();
