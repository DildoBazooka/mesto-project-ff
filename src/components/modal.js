const popups = document.querySelectorAll('.popup');

export function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupOnEsc);
}

export function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closePopupOnEsc);
}

function closePopupOnEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        if (openedPopup) closePopup(openedPopup);
    }
}

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (
            evt.target.classList.contains('popup_is-opened') ||
            evt.target.classList.contains('popup__close')
        ) {
            closePopup(popup);
        }
    });
});