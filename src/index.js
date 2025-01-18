import {initialCards} from './components/cards.js';
import {createCard, deleteCard, handleLikeClick} from './components/card.js';
import {openPopup, closePopup} from './components/modal.js';
import './pages/index.css';

const popupEdit = document.querySelector('.popup_type_edit');
const profileEditForm = popupEdit.querySelector('.popup__form');
const nameInput = profileEditForm.querySelector('.popup__input_type_name');
const jobInput = profileEditForm.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const addCardPopup = document.querySelector('.popup_type_new-card');
const addCardButton = document.querySelector('.profile__add-button');
const addCardForm = addCardPopup.querySelector('.popup__form');
const editButton = document.querySelector('.profile__edit-button');
const cardsContainer = document.querySelector('.places__list');
const popupImage = document.querySelector('.popup_type_image');
const popupImageElement = popupImage.querySelector('.popup__image');
const popupCaption = popupImage.querySelector('.popup__caption');

export function handleImageClick(data) {
    
    popupImageElement.src = data.link;
    popupImageElement.alt = data.name;
    popupCaption.textContent = data.name;

    openPopup(popupImage);
}

function renderCards(initialCards) {
    initialCards.forEach((data) => {
        const card = createCard(data, handleLikeClick, handleImageClick, deleteCard);
        cardsContainer.append(card);
    });
}

addCardButton.addEventListener('click', () => {
    addCardForm.reset();
    openPopup(addCardPopup);
});

function addCard(data) {
    const cardElement = createCard(data, handleLikeClick, handleImageClick, deleteCard);
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

function handleProfileEditFormSubmit(evt) {
   evt.preventDefault(); 

   profileName.textContent = nameInput.value;
   profileDescription.textContent = jobInput.value;

   closePopup(popupEdit);
}

profileEditForm.addEventListener('submit', handleProfileEditFormSubmit);

editButton.addEventListener('click', () => {
   nameInput.value = profileName.textContent;
   jobInput.value = profileDescription.textContent;

   openPopup(popupEdit);
});

renderCards(initialCards);