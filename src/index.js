import "./styles/index.css";
import {initialCards, cardSelector, placesList, editModalEl, editFormModal, addModalEl, addFormModal, profileEditButton,
       cardAddButton, profileName, profileProfession, modalInputName, modalInputProfession, modalInputCardName, 
       modalInputCardLink } from "./utils/constants.js";
import {handleCardClick} from "./utils/utils.js";
import Section from "./components/Section.js";
import Card from "./components/card.js";
import PopupWithForm from "./components/popup-with-form.js";
import UserInfo from "./components/userInfo.js";
import FormValidator from "./components/form-validator.js";

import headerImage from "./images/header__logo.svg";
import profileImage from "./images/profile__image.jpg";


// *** Profile ***
const headerLogo = document.querySelector(".header__logo");
headerLogo.src = headerImage;

const profilePicture = document.querySelector(".profile__image");
profilePicture.src = profileImage;

const userInfo = new UserInfo(
    modalInputName,
    modalInputProfession,
    profileName,
    profileProfession
);


// *** Forms ***
const editFormPopup = new PopupWithForm(editModalEl, (data) => {
    userInfo.setUserInfo({data});
    });

const addFormPopup = new PopupWithForm(addModalEl, (data) => {
    const card = new Card({data, handleCardClick}, cardSelector);
        const cardElement = card.generateCard();
        placesList.append(cardElement)
});

profileEditButton.addEventListener("click", () => {
    editFormPopup.open();
    userInfo.getUserInfo();
    editFormValidator.removeValidationErrors();
    editFormValidator.disableSubmitButton();
});

cardAddButton.addEventListener("click", () => {
    addFormPopup.open();
    addFormValidator.removeValidationErrors();
    addFormValidator.disableSubmitButton();
});


// *** FormValidator ***
const formSettings = {
    _inputSelector: ".modal__input",
    _submitButtonSelector: ".modal__save-button",
    _inputErrorClass: "modal__input-error",
    _errorClass: "modal__input-error_active",
    _inactiveButtonClass: "modal__save-button_inactive"
}

const editFormValidator = new FormValidator(formSettings, editFormModal);
const addFormValidator = new FormValidator(formSettings, addFormModal);

editFormValidator.enableValidation();
addFormValidator.enableValidation();


// *** Cards ***
const originalCards = new Section({
    items: initialCards, 
    renderer: (item) => {
        const card = new Card({item, handleCardClick}, cardSelector);
        const cardElement = card.generateCard();
        originalCards.addItem(cardElement);
    }
}, placesList);

originalCards.renderItems(); 

export {editFormValidator, addFormValidator, formSettings};