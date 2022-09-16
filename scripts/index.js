
// FORM PROFILE
const formElementProfile = document.querySelector('#popup__form_edit');
const nameInput = document.querySelector('#popup__name-input');
const jobInput = document.querySelector('#popup__job-input');
const profileName = document.querySelector('#profile__name');
const profileJob = document.querySelector('#profile__job');
// Open/closed ProfileForm
const editButton = document.querySelector('#profile__edit-button');
const popUpCloseProfile = document.querySelector('#popup__close-profile');
const popUpProfile = document.querySelector('#popup__profile');
// Open/closed AddForm
const addButton = document.querySelector('#profile__add-button');
const popUpAdd = document.querySelector('#popup__add');
const popUpCloseAdd = document.querySelector('#popup__close-add');
// FORM ADD
const formElementAdd = document.querySelector('#popup__form_add')
const locationInput = document.querySelector('#popup__location-input');
const urlImageInput = document.querySelector('#popup__url-input')
const cardImage = document.querySelector('.elements__image');
const cardLocation = document.querySelector('.elements__title');
// POPUP IMAGE
const popupImageSee = document.querySelector('#popup__image');
const popupImage = popupImageSee.querySelector('.popup__image');
const popupImageCaption = popupImageSee.querySelector('.popup__image-caption');
const popUpCloseImage = document.querySelector('#popup__close-image');


function formSubmitHandler (event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    PopUpButtonCloseProfile();
}


function openPopUpProfile() {
    popUpProfile.classList.add('popup_open');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function  PopUpButtonCloseProfile(event) {
    popUpProfile.classList.remove('popup_open');
}

formElementProfile.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopUpProfile);
popUpCloseProfile.addEventListener('click',  PopUpButtonCloseProfile);

function formSubmitAdd(evt) {
  evt.preventDefault();
  addCard(locationInput.value, urlImageInput.value);
  locationInput.value = '';
  urlImageInput.value = '';
  PopUpButtonCloseAdd();
}

function openPopUpAdd() {
  popUpAdd.classList.add('popup_open');
}

function  PopUpButtonCloseAdd(event) {
  popUpAdd.classList.remove('popup_open');
}

formElementAdd.addEventListener('submit', formSubmitAdd);
addButton.addEventListener('click', openPopUpAdd);
popUpCloseAdd.addEventListener('click',  PopUpButtonCloseAdd);

function openImage(image, caption) {
  openPopupImage();
  popupImage.src = image;
  popupImage.alt = `Изображение ${caption}`;
  popupImageCaption.textContent = caption;
}

function openPopupImage() {
  popupImageSee.classList.add('popup_open');
}

function closePopupImage() {
  popupImageSee.classList.remove('popup_open');
}

popUpCloseImage.addEventListener('click', closePopupImage)

const cardsTemplate = document.querySelector('#template').content;
const cardsList = document.querySelector('.elements__gallery');
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

initialCards.forEach((item) => {
  addCard(item.name, item.link);
})

function addCard(name, link) {
  const cardElement = cardsTemplate.querySelector('.elements__gallery-item').cloneNode(true);
  const cardElementImage = cardElement.querySelector('.elements__image');

  const removeCardButton = cardElement.querySelector('.elements__button-remove');
  const likeCardButton = cardElement.querySelector('.elements__like');

  cardElementImage.src = link;
  cardElementImage.alt = `Изображение ${name}`;
  cardElement.querySelector('.elements__title').textContent = name;

  cardElementImage.addEventListener('click', () => {
    openImage(link, name);
  });

  likeCardButton.addEventListener('click', () => {
    likeCardButton.classList.toggle('elements__like_active');
  });

  removeCardButton.addEventListener('click', () => {
    const listItem = removeCardButton.closest('.elements__gallery-item');
    listItem.remove();
  });

  renderCard(cardElement);
}

function renderCard (card) {
  cardsList.prepend(card);
}



