import "../pages/index.css";
import {headerLogo, profileName, profileProfession, profileAvatar, placesList,
       editModalEl, editFormModal, editAvatarEl, addModalEl, addFormModal, profileEditButton,
       cardAddButton, modalInputName, modalInputProfession, modalInputAvatar, formSettings, avatarButton}
       from "../utils/constants.js";
import {renderItem} from "../utils/utils.js";
import Section from "../components/section.js";
import PopupWithForm from "../components/popup-with-form.js";
import UserInfo from "../components/user-info.js";
import FormValidator from "../components/form-validator.js";
import Api from "../components/api.js";
import headerImage from "../images/header__logo.svg";
import avatarButtonImage from "../images/profile__edit-button-sign.svg"


// *** Api ***
const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-13",
    authToken: "487d57fd-0c04-4caf-a7fc-6016fd47c784"
});


// *** Profile ***
headerLogo.src = headerImage;
avatarButton.src = avatarButtonImage;


const userInfo = new UserInfo(profileName, profileProfession, profileAvatar);

api.getUserInfo().then(data => {
    userInfo.setUserInfo(data);
})

// *** Original Cards ***
api.getCards().then(data => {
    console.log(data)
    const originalCards = new Section({
        items: data, 
        renderer: (items) => {
            originalCards.addItem(renderItem(items));
        }
    }, placesList); 
    originalCards.renderItems(renderItem(data));
});


// *** Forms ***
const editFormPopup = new PopupWithForm(editModalEl, (data) => {
    api.editUserInfo(data).then(data => {
        userInfo.setUserInfo(data);
    })
    editFormPopup.close();
});

const editAvatarFormPopup = new PopupWithForm(editAvatarEl, (data) => {
    api.editUserAvatar(data).then(data => {
        userInfo.setUserInfo(data);
    })
    editAvatarFormPopup.close();
});

const addFormPopup = new PopupWithForm(addModalEl, (data) => {
    api.addCard(data).then(data => {
        const originalCards = new Section({
            items: data, 
            renderer: (items) => {
                originalCards.addItem(renderItem(items));
            }
        }, placesList); 
        originalCards.addItem(renderItem(data));
    });
    addFormPopup.close();
});


// *** Buttons ***
profileEditButton.addEventListener("click", () => {
    editFormPopup.open();
    editFormPopup.setEventListeners();
    modalInputName.value = userInfo.getUserInfo().name;
    modalInputProfession.value = userInfo.getUserInfo().profession;
    editFormValidator.removeValidationErrors();
    editFormValidator.disableSubmitButton();
});

profileAvatar.addEventListener("click", () => {
    editAvatarFormPopup.open();
    editAvatarFormPopup.setEventListeners();
});

cardAddButton.addEventListener("click", () => {
    addFormPopup.open();
    addFormPopup.setEventListeners();
    addFormValidator.removeValidationErrors();
    addFormValidator.disableSubmitButton();
});


// *** FormValidator *** 
const editFormValidator = new FormValidator(formSettings, editFormModal);
const addFormValidator = new FormValidator(formSettings, addFormModal);

editFormValidator.enableValidation();
addFormValidator.enableValidation();