export function createCard(data, handleLikeClick, handleImageClick, deleteCard) {
    const cardTemplate = document.querySelector("#card-template").content;
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const likeButton = cardElement.querySelector('.card__like-button');
    const deleteButton = cardElement.querySelector(".card__delete-button");

    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardElement.querySelector(".card__title").textContent = data.name;

    deleteButton.addEventListener("click", () => {
        deleteCard(cardElement);
    });

    likeButton.addEventListener('click', () => {
        handleLikeClick(likeButton);
    });

    cardImage.addEventListener('click', () => {
        handleImageClick(data);
    });

    return cardElement;
}

export function handleLikeClick(likeButton) {
    likeButton.classList.toggle('card__like-button_is-active');
}

export function deleteCard(cardElement) {
    cardElement.remove();
}