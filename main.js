(()=>{"use strict";function e(e,t,r,n){var o=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),a=o.querySelector(".card__image"),c=o.querySelector(".card__like-button"),i=o.querySelector(".card__delete-button");return a.src=e.link,a.alt=e.name,o.querySelector(".card__title").textContent=e.name,i.addEventListener("click",(function(){n(o)})),c.addEventListener("click",(function(){t(c)})),a.addEventListener("click",(function(){r(e)})),o}function t(e){e.classList.toggle("card__like-button_is-active")}function r(e){e.remove()}function n(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",a)}function o(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",a)}function a(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&o(t)}}document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_is-opened")||t.target.classList.contains("popup__close"))&&o(e)}))}));var c=function(e,t,r){var n=e.querySelector("#".concat(t.name,"-error"));t.classList.remove(r.inputErrorClass),n.textContent="",n.classList.remove(r.errorClass)},i=function(e,t,r){u(e)?(t.disabled=!0,t.classList.add(r.inactiveButtonClass)):(t.disabled=!1,t.classList.remove(r.inactiveButtonClass))},u=function(e){return e.some((function(e){return!e.validity.valid}))},s=function(e,t){if(e){var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);r.forEach((function(r){c(e,r,t)})),i(r,n,t)}},l={baseUrl:"https://nomoreparties.co/v1/wff-cohort-31",headers:{authorization:"1e89e290-850d-464f-ae44-92858c6c2fbd","Content-Type":"application/json"}},p=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var f,m=document.querySelector(".popup_type_edit"),y=m.querySelector(".popup__form"),_=y.querySelector(".popup__input_type_name"),v=y.querySelector(".popup__input_type_description"),S=document.querySelector(".profile__title"),h=document.querySelector(".profile__description"),b=document.querySelector(".popup_type_new-card"),q=document.querySelector(".profile__add-button"),k=b.querySelector(".popup__form"),g=document.querySelector(".profile__edit-button"),C=document.querySelector(".places__list"),L=document.querySelector(".popup_type_image"),E=L.querySelector(".popup__image"),x=L.querySelector(".popup__caption"),A={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function j(e){e.link&&(E.src=e.link,E.alt=e.name,x.textContent=e.name,n(L))}function w(n){Array.isArray(n)&&0!==n.length&&n.forEach((function(n){var o=e(n,t,j,r);C.append(o)}))}Promise.all([fetch("".concat(l.baseUrl,"/users/me"),{headers:l.headers}).then(p),fetch("".concat(l.baseUrl,"/cards"),{headers:l.headers}).then(p)]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,c,i=[],u=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(s)throw o}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],a=n[1];S.textContent=o.name,h.textContent=o.about,document.querySelector(".profile__image img").src=o.avatar,w(a)})).catch((function(e){return console.log(e)})),f=A,Array.from(document.querySelectorAll(f.formSelector)).forEach((function(e){!function(e,t){var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);i(r,n,t),r.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,r){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?c(e,t,r):function(e,t,r,n){var o=e.querySelector("#".concat(t.name,"-error"));t.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass)}(e,t,t.validationMessage,r)}(e,o,t),i(r,n,t)}))}))}(e,f)})),q.addEventListener("click",(function(){k.reset(),n(b),s(k,A)})),k.addEventListener("submit",(function(n){var a;n.preventDefault(),a=e({name:k.querySelector(".popup__input_type_card-name").value,link:k.querySelector(".popup__input_type_url").value},t,j,r),C.prepend(a),o(b),k.reset(),s(k,A)})),y.addEventListener("submit",(function(e){e.preventDefault(),S.textContent=_.value,h.textContent=v.value,o(m)})),g.addEventListener("click",(function(){_.value=S.textContent,v.value=h.textContent,n(m),s(y,A)})),w([{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}])})();