import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const newGalleryItems = galleryItems.map((items) =>
`<div class="gallery__item">
    <a class="gallery__link" href="${items.original}">
        <img
            class="gallery__image"
            src="${items.preview}"
            data-source="${items.original}"
            alt="${items.description}"
        />
    </a>
</div>`
).join("");

gallery.innerHTML = newGalleryItems;

const addClickImg = (event) => {
    event.preventDefault();

    if(event.target.nodeName !== "IMG") {
        return;
    };

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
    instance.show();
    
    gallery.addEventListener("keydown", (event) => {
        if(event.code === "Escape") {
            instance.close();
        }
    })

}

gallery.addEventListener("click", addClickImg);