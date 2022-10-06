const popups = document.querySelectorAll('.popup');
// TOP POPUP
const popUpProfile = document.querySelector('#popup__profile');
const popUpAdd = document.querySelector('#popup__add');
const popupImageSee = document.querySelector('#popup__image');
// FORM PROFILE
const formElementProfile = document.querySelector('#profile_edit');
const buttonSubmitEdit = formElementProfile.querySelector('.popup__save');
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
const buttonSubmitPlace = formElementAdd.querySelector('.popup__save');
const locationInput = document.querySelector('.popup__input_content_location-name');
const urlImageInput = document.querySelector('.popup__input_content_url')
const cardImage = document.querySelector('.elements__image');
const cardLocation = document.querySelector('.elements__title');
// POPUP IMAGE
const popupImage = popupImageSee.querySelector('.popup__image');
const popupImageCaption = popupImageSee.querySelector('.popup__image-caption');
// CLOSE BUTTON
const popUpCloseProfile = document.querySelector('#popup__close-profile');
const popUpCloseAdd = document.querySelector('#popup__close-add');
const popUpCloseImage = document.querySelector('#popup__close-image');

const errorMessages = document.querySelectorAll('.popup__input-error');

// Функции открытия
function openPopup(modal) {
  modal.classList.add('popup_open');
  document.addEventListener('keydown', closeByEscape)
}

// Функции закрытия
function closePopup(modal) {
  modal.classList.remove('popup_open');
  disableErrorMessages();
  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    popups.forEach(modal => closePopup(modal));
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
  enableSubmitButton(buttonSubmitEdit);
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
  disableSubmitButton(buttonSubmitPlace);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard(locationInput.value, urlImageInput.value);
  locationInput.value = '';
  urlImageInput.value = '';
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

// Функции fix открытия/закрытия form 
function enableSubmitButton(buttonElement) {
  buttonElement.removeAttribute('disabled');
  buttonElement.classList.remove('popup__save_disabled');
}

function disableSubmitButton(buttonElement) {
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add('popup__save_disabled');
}

function disableErrorMessages() {
  errorMessages.forEach(validMessage => validMessage.textContent = "");
}

// Функции Cards
const cardsTemplate = document.querySelector('#template').content;
const cardsList = document.querySelector('.elements__gallery');
const cardsItem = cardsTemplate.querySelector('.elements__gallery-item');


function createCard(name, link) {
  const cardElement = cardsItem.cloneNode(true);
  const cardElementImage = cardElement.querySelector('.elements__image');

  const removeCardButton = cardElement.querySelector('.elements__button-remove');
  const likeCardButton = cardElement.querySelector('.elements__like');

  cardElementImage.src = link;
  cardElementImage.alt = `Изображение ${name}`;
  cardElement.querySelector('.elements__title').textContent = name;

  cardElementImage.addEventListener('click', () => openImage(link, name));
  likeCardButton.addEventListener('click', () => likeCardButton.classList.toggle('elements__like_active'));
  removeCardButton.addEventListener('click', () => cardElement.remove());

  return cardElement;
}

function renderCard (name, link) {
  const cardElement = createCard(name, link);
  cardsList.prepend(cardElement);
}

initialCards.forEach((item) => renderCard(item.name, item.link));


