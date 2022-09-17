// TOP POPUP
const popUpProfile = document.querySelector('#popup__profile');
const popUpAdd = document.querySelector('#popup__add');
const popupImageSee = document.querySelector('#popup__image');
// FORM PROFILE
const formElementProfile = document.querySelector('#popup__form_edit');
const nameInput = document.querySelector('#popup__name-input');
const jobInput = document.querySelector('#popup__job-input');
const profileName = document.querySelector('#profile__name');
const profileJob = document.querySelector('#profile__job');
// Open ProfileForm
const editButton = document.querySelector('#profile__edit-button');
// Open AddForm
const addButton = document.querySelector('#profile__add-button');
// FORM ADD
const formElementAdd = document.querySelector('#popup__form_add')
const locationInput = document.querySelector('#popup__location-input');
const urlImageInput = document.querySelector('#popup__url-input')
const cardImage = document.querySelector('.elements__image');
const cardLocation = document.querySelector('.elements__title');
// POPUP IMAGE
const popupImage = popupImageSee.querySelector('.popup__image');
const popupImageCaption = popupImageSee.querySelector('.popup__image-caption');
// CLOSE BUTTON
const popUpCloseProfile = document.querySelector('#popup__close-profile');
const popUpCloseAdd = document.querySelector('#popup__close-add');
const popUpCloseImage = document.querySelector('#popup__close-image');

// Функции открытия/закрытия PopUp
function openPopup(modal) {
  modal.classList.add('popup_open');
}

function closePopup(modal) {
  modal.classList.remove('popup_open');
}

popUpCloseProfile.addEventListener('click', () => closePopup(popUpProfile));
popUpCloseAdd.addEventListener('click', () => closePopup(popUpAdd));
popUpCloseImage.addEventListener('click', () => closePopup(popupImageSee));

// Функции ProfileEdit
function openPopUpProfile() {
  openPopup(popUpProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function submitFormProfile (event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popUpProfile);
}

editButton.addEventListener('click', openPopUpProfile);
formElementProfile.addEventListener('submit', submitFormProfile);

// Функции AddCards
function openAddPopup() {
  openPopup(popUpAdd);
}

function submitAddForm(evt) {
  evt.preventDefault();
  renderCard(locationInput.value, urlImageInput.value);
  locationInput.value = '';
  urlImageInput.value = '';
  closePopup(popUpAdd);
}

addButton.addEventListener('click', openAddPopup);
formElementAdd.addEventListener('submit', submitAddForm);

// Функция открытия Image
function openImage(image, caption) {
  popupImage.src = image;
  popupImage.alt = `Изображение ${caption}`;
  popupImageCaption.textContent = caption;
  openPopup(popupImageSee);
}

// Функции Cards
const cardsTemplate = document.querySelector('#template').content;
const cardsList = document.querySelector('.elements__gallery');

function addCard(name, link) {
  const cardElement = cardsTemplate.querySelector('.elements__gallery-item').cloneNode(true);
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
  const cardElement = addCard(name, link);
  cardsList.prepend(cardElement);
}

initialCards.forEach((item) => renderCard(item.name, item.link));


