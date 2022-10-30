import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const popups = document.querySelectorAll('.popup');
// TOP POPUP
const popUpProfile = document.querySelector('#popup__profile');
const popUpAdd = document.querySelector('#popup__add');
const popupImageSee = document.querySelector('#popup__image');
// FORM PROFILE
const formElementProfile = document.querySelector('#profile_edit');
const nameInput = document.querySelector('.popup__input_content_name');
const jobInput = document.querySelector('.popup__input_content_job');
const profileName = document.querySelector('#profile__name');
const profileJob = document.querySelector('#profile__job');
// Open ProfileForm
const editButton = document.querySelector('#profile__edit-button');
// Open AddForm
const addButton = document.querySelector('#profile__add-button');
// FORM ADD
const formElementAdd = document.querySelector('#new_place');
const locationInput = document.querySelector('.popup__input_content_location-name');
const urlImageInput = document.querySelector('.popup__input_content_url')
// POPUP IMAGE
const popupImage = popupImageSee.querySelector('.popup__image');
const popupImageCaption = popupImageSee.querySelector('.popup__image-caption');


// Функции открытия/закрытия
function openPopup(modal) {
  modal.classList.add('popup_open');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(modal) {
  modal.classList.remove('popup_open');
  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    popups.forEach(closePopup);
  }
}

popups.forEach(popup => {
  popup.addEventListener('mousedown', evt => {
    if (evt.target.classList.contains('popup_open') || evt.target.classList.contains('popup__button-close')) {
      closePopup(popup);
    }
  });
});

// Функции ProfileEdit
function openPopUpProfile() {
  openPopup(popUpProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  editProfileFormValid.resetValidation();
}

function handleProfileFormSubmit (event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popUpProfile);
}

editButton.addEventListener('click', openPopUpProfile);
formElementProfile.addEventListener('submit', handleProfileFormSubmit);

// Функции createCard
function openAddPopup() {
  openPopup(popUpAdd);
  formElementAdd.reset();
  addCardFormValid.resetValidation()
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const cardItem = {
    name: locationInput.value,
    link: urlImageInput.value
  }
  cardsList.prepend(createCard(cardItem));
  closePopup(popUpAdd);
}

addButton.addEventListener('click', openAddPopup);
formElementAdd.addEventListener('submit', handleCardFormSubmit);

// Функция открытия Image
function openImage(image, caption) {
  popupImage.src = image;
  popupImage.alt = `Изображение ${caption}`;
  popupImageCaption.textContent = caption;
  openPopup(popupImageSee);
}

// Функции Cards

const cardsList = document.querySelector('.elements__gallery')

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function createCard (item) {
  const cardElement = new Card(item, '#template', openImage).createCard();
  return cardElement;
}

initialCards.forEach(item => {
  const card = createCard(item);
  cardsList.append(card);
});

// Валидация форм

const settingsList = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_error',
};

const editProfileFormValid = new FormValidator(settingsList, popUpProfile);
const addCardFormValid = new FormValidator(settingsList, popUpAdd);

editProfileFormValid.enableValidation();
addCardFormValid.enableValidation();


