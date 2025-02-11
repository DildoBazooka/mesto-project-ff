const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-31',
    headers: {
      authorization: '1e89e290-850d-464f-ae44-92858c6c2fbd',
      'Content-Type': 'application/json'
    }
};

const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

export const getUserInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers
    }).then(checkResponse);
};
  
  // Получение карточек
export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers
    }).then(checkResponse);
};

export const updateUserInfo = (name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
          name: name,
          about: about
      })
  }).then(checkResponse);
};

export const addNewCard = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify({
          name,
          link
      })
  }).then(checkResponse);
};

export const deleteCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: config.headers
  }).then(checkResponse);
};

export const likeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}/likes`, { 
      method: 'PUT',
      headers: config.headers
  }).then(checkResponse);
};

export const dislikeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}/likes`, { 
      method: 'DELETE',
      headers: config.headers
  }).then(checkResponse);
};

export const updateAvatar = (avatarUrl) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
          avatar: avatarUrl
      })
  }).then(checkResponse);
};