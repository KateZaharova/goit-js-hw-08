// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(SimpleLightbox);

import { galleryItems } from './gallery-items.js';

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

galleryList.addEventListener("click", handlerClick);

function handlerClick(event) {
   event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
      console.log(event.target.dataset.source)
      instanceLB.element().querySelector('img').src = event.target.dataset.source;
      instanceLB.show();
    }
} 

const instanceLB = basicLightbox.create('<img />', 
{
    onShow: (instanceLB) => {
      window.addEventListener('keydown', closeOnEsc);
    },
    onClose: (instanceLB) => {
      window.removeEventListener('keydown', closeOnEsc);
    },
  }
)

function closeOnEsc(event) {
    if (event.code === "Escape") {
        instanceLB.close()
    }
};