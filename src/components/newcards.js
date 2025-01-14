import {openPopup, closePopup} from './popup.js';
import {createCard, deleteCard} from '../index.js';

const addCardPopup = document.querySelector('.popup_type_new-card');
const addCardButton = document.querySelector('.profile__add-button');
const addCardForm = addCardPopup.querySelector('.popup__form');

addCardButton.addEventListener('click', () => {
    const form = addCardPopup.querySelector('.popup__form');
    form.reset();
    openPopup(addCardPopup);
});

function addCard(data) {
    const cardsContainer = document.querySelector('.places__list');
    const cardElement = createCard(data, deleteCard);
    cardsContainer.prepend(cardElement);
}

addCardForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    
    const name = addCardForm.querySelector('.popup__input_type_card-name').value;
    const link = addCardForm.querySelector('.popup__input_type_url').value;
    
    addCard({ name, link });
    
    closePopup(addCardPopup);
    addCardForm.reset();
});