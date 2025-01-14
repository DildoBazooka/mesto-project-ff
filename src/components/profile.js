import { openPopup, closePopup } from './popup.js';

const formElement = document.querySelector('.popup_type_edit .popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');

const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

function handleFormSubmit(evt) {
   evt.preventDefault(); 

   profileName.textContent = nameInput.value;
   profileDescription.textContent = jobInput.value;

   const popupEdit = document.querySelector('.popup_type_edit');
   closePopup(popupEdit);
}

formElement.addEventListener('submit', handleFormSubmit);

const editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', () => {
   nameInput.value = profileName.textContent;
   jobInput.value = profileDescription.textContent;

   const popupEdit = document.querySelector('.popup_type_edit');
   openPopup(popupEdit);
});

