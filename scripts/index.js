// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
function createCard(data, deleteCard) {
    const cardTemplate = document.querySelector("#card-template").content;
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    cardElement.querySelector(".card__image").src = data.link;
    cardElement.querySelector(".card__title").textContent = data.name;
    const deleteButton = cardElement.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", () => {
        deleteCard(cardElement);
    });
    return cardElement;
}

function deleteCard(cardElement) {
    cardElement.remove();
}

function renderCards(initialCards) {
    const cardsContainer = document.querySelector(".places__list");
    initialCards.forEach((cardData) => {
      const card = createCard(cardData, deleteCard);
      cardsContainer.append(card);
    });
}

renderCards(initialCards);









