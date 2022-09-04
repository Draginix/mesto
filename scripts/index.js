// FORM
const formElement = document.querySelector('#popup__form');
const nameInput = document.querySelector('#popup__name-input');
const jobInput = document.querySelector('#popup__job-input');
const profileName = document.querySelector('#profile__name');
const profileJob = document.querySelector('#profile__job');
// Open/closed form
const editButton = document.querySelector('#profile__edit-button');
const popUpClose = document.querySelector('#popup__close');
const popUp = document.querySelector('#popup');

function formSubmitHandler (event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    PopUpButtonClose();
}

function openPopUp() {
    popUp.classList.add('popup_open');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function  PopUpButtonClose(event) {
    popUp.classList.remove('popup_open');
}

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopUp);
popUpClose.addEventListener('click',  PopUpButtonClose);

// const elementsGallery = document.querySelector('#elements__gallery'); 

// elementsGallery.addEventListener('click', (event)=> {
//     event.target.classList.toggle('elements__like_active');
// })





