import {deleteCard as deleteCardApi, likeCard, dislikeCard} from './api';

export function createCard(data, handleLikeClick, handleImageClick, deleteCard, userId) {
    const cardTemplate = document.querySelector("#card-template").content;
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const likeButton = cardElement.querySelector('.card__like-button');
    const deleteButton = cardElement.querySelector(".card__delete-button");
    const likeCount = cardElement.querySelector('.card__like-count');

    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardElement.querySelector(".card__title").textContent = data.name;
    likeCount.textContent = data.likes.length;

    deleteButton.addEventListener("click", () => {
        deleteCardApi(data._id) 
        .then(() => {
            deleteCard(cardElement);
        })
        .catch((err) => {
            console.log(err); 
          });
    });
    
    likeButton.addEventListener('click', () => {
        handleLikeClick(likeButton, data._id, likeCount);
    });

    cardImage.addEventListener('click', () => {
        handleImageClick(data);
    });

    return cardElement;
}

export function handleLikeClick(likeButton, cardId, likeCount) {
    const isLiked = likeButton.classList.contains('card__like-button_is-active');

    const likeRequest = isLiked ? dislikeCard(cardId) : likeCard(cardId);

    likeRequest
        .then((updatedCard) => {
            likeButton.classList.toggle('card__like-button_is-active');
            likeCount.textContent = updatedCard.likes.length;
        })
        .catch((err) => {
            console.log(err); 
          }); 
}

export function deleteCard(cardElement) {
    cardElement.remove();
    cardElement = null;
}

