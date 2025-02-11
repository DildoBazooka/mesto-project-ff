import {createCard, deleteCard, handleLikeClick} from './components/card.js';
import {openPopup, closePopup} from './components/modal.js';
import {enableValidation, clearValidation} from './components/validation.js';
import {getUserInfo, getInitialCards, updateUserInfo, updateAvatar, addNewCard} from './components/api.js';
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
const saveButton = profileEditForm.querySelector('.popup__button');
const submitCardButton = addCardForm.querySelector('.popup__button');

const avatarPopup = document.querySelector(".popup_type_avatar");
const avatarForm = avatarPopup.querySelector(".popup__form");
const avatarInput = avatarPopup.querySelector(".popup__input_type_avatar-url");
const profileAvatar = document.querySelector(".profile__image img");
const profileAvatarContainer = document.querySelector(".profile__image");
const submitButton = avatarPopup.querySelector(".popup__button");

let userId;

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

enableValidation(validationConfig);

Promise.all([getUserInfo(), getInitialCards()])
    .then(([userData, cards]) => {

        profileName.textContent = userData.name;
        profileDescription.textContent = userData.about;
        profileAvatar.src = userData.avatar;
        userId = userData._id;

        cards.forEach((cardData) => {
            const cardElement = createCard(cardData, handleLikeClick, handleImageClick, deleteCard, userData._id);
            cardsContainer.append(cardElement);
        });
    })
    .catch((err) => console.log(`Ошибка загрузки данных: ${err}`));

editButton.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
    clearValidation(profileEditForm, validationConfig);
    openPopup(popupEdit);
});

function handleProfileEditFormSubmit(evt) {
    evt.preventDefault();

    saveButton.textContent = 'Сохранение...';

    updateUserInfo(nameInput.value, jobInput.value)
        .then((userData) => {
            profileName.textContent = userData.name;
            profileDescription.textContent = userData.about;
            closePopup(popupEdit);
        })
        .catch((err) => console.error('Ошибка обновления профиля:', err))
        .finally(() => {
            saveButton.textContent = 'Сохранить';
        });
}

profileEditForm.addEventListener('submit', handleProfileEditFormSubmit);

profileAvatarContainer.addEventListener("click", () => {
    clearValidation(avatarForm, validationConfig);
    openPopup(avatarPopup);
});

avatarForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const avatarUrl = avatarInput.value;

  submitButton.textContent = "Сохранение...";

  updateAvatar(avatarUrl)
    .then((data) => {
      profileAvatar.src = data.avatar;
      closePopup(avatarPopup);
      avatarForm.reset();
    })
    .catch((err) => console.error(`Ошибка: ${err}`))
    .finally(() => {
      submitButton.textContent = "Сохранить";
    });
});

addCardButton.addEventListener('click', () => {
    addCardForm.reset();
    clearValidation(addCardForm, validationConfig);
    openPopup(addCardPopup);
});

function addCard(data) {
    const cardElement = createCard(data, handleLikeClick, handleImageClick, deleteCard, userId);
    cardsContainer.prepend(cardElement);
}

addCardForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const name = addCardForm.querySelector('.popup__input_type_card-name').value;
    const link = addCardForm.querySelector('.popup__input_type_url').value;

    submitCardButton.textContent = "Сохранение...";

    addNewCard(name, link)
    .then((cardData) => {
        addCard(cardData); // Добавляем карточку
        closePopup(addCardPopup);
        addCardForm.reset();
        clearValidation(addCardForm, validationConfig);
    })
    .catch((err) => console.error(`Ошибка добавления карточки: ${err}`))
    .finally(() => {
        submitCardButton.textContent = "Сохранить";
    });
});

export function handleImageClick(data) {
    if (!data.link) return;
    
    popupImageElement.src = data.link;
    popupImageElement.alt = data.name;
    popupCaption.textContent = data.name;

    openPopup(popupImage);
}