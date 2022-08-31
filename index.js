// FORM
const formElement = document.querySelector('#popup__form');
const nameInput = document.querySelector('#popup__name-input');
const jobInput = document.querySelector('#popup__job-input');
const profileName = document.querySelector('#profile__name');
const profileJob = document.querySelector('#profile__job');


const formSubmitHandler = (event) => {
    event.preventDefault();

    const nameValue = nameInput.value;
    const jobValue = jobInput.value;

    profileName.textContent = nameValue;
    profileJob.textContent = jobValue
}

formElement.addEventListener('submit', formSubmitHandler)


// Open/closed form
const openPopUp = document.querySelector('#profile__edit-button');
const closePopUp = document.querySelector('#popup__close');
const popUp = document.querySelector('#popup');
const SavePopUp = document.querySelector('#popup__save-button')

openPopUp.addEventListener('click', () => {
    popUp.classList.add('popup_open');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('popup_open');
})

SavePopUp.addEventListener('click', () => {
    popUp.classList.remove('popup_open');
})


// Like
const elementsGallery = document.querySelector('#elements__gallery');

elementsGallery.addEventListener('click', (event)=> {
    event.target.classList.toggle('elements__like_active');
})





