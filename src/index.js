import {initialCards} from './scripts/cards.js';
import './components/newcards.js';
import './components/profile.js';
import {openPopup} from './components/popup.js';
import './pages/index.css'; 

export function createCard(data, deleteCard) {
    const cardTemplate = document.querySelector("#card-template").content;
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const likeButton = cardElement.querySelector('.card__like-button');
    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardElement.querySelector(".card__image").alt = data.name;
    cardElement.querySelector(".card__title").textContent = data.name;
    const deleteButton = cardElement.querySelector(".card__delete-button");

    deleteButton.addEventListener("click", () => {
        deleteCard(cardElement);
    });

    likeButton.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('card__like-button')) {
          evt.target.classList.toggle('card__like-button_is-active');
        }
    });

    const popupImage = document.querySelector('.popup_type_image');
    const popupImageElement = popupImage.querySelector('.popup__image');
    const popupCaption = popupImage.querySelector('.popup__caption');

    cardImage.addEventListener('click', () => {
        popupImageElement.src = data.link;
        popupImageElement.alt = data.name;
        popupCaption.textContent = data.name;
        openPopup(popupImage);
    });

    return cardElement;
}

export function deleteCard(cardElement) {
    cardElement.remove();
}

function renderCards(initialCards) {
    const cardsContainer = document.querySelector(".places__list");
    initialCards.forEach((data) => {
      const card = createCard(data, deleteCard);
      cardsContainer.append(card);
    });
}

renderCards(initialCards);




