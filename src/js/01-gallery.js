import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

const galleryList = document.querySelector(".gallery");
const markup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
            return `<li class="gallery__item">
            <a class="gallery__link" href='${original}'>
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source='${original}'
                    alt="${description}"
                />
            </a>
        </li>`})
        .join('');      
}

galleryList.insertAdjacentHTML('beforeend', markup);


new SimpleLightbox('.gallery a', {
    captions: true,
    captionPosition: "bottom",
    captionDelay: 250,
    captionsData: "alt",
});
