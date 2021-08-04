const initialCards = [ 
       {
           name: "Everglade National Park",
           link: "images/card__everglade.jpg"
       },
       {
           name: "Navajo Tribal Park",
           link: "images/card__navajopark.jpg"
       },
       {
           name: "Golden Gate Bridge",
           link: "images/card__goldengate.jpg"
       },
       {
           name: "Route 66",
           link: "images/card__route66.jpg"
       },
       {
           name: "Yellowstone National Park",
           link: "images/card__yellowstone.jpg"
       },
       {
           name: "Grand Canyon",
           link: "images/card__grandcanyon.jpg"
       },
   ];

   // *** Wrappers ***
const editModalEl = "modal_type_edit";
const editFormModal = document.querySelector(".modal__form_type_edit");
const addModalEl = "modal_type_add";
const addFormModal = document.querySelector(".modal__form_type_add");
const placesList = document.querySelector(".places__list");


// *** Buttons ***
const profileEditButton = document.querySelector(".profile__edit-button");
const cardAddButton = document.querySelector(".profile__add-button");


/* // *** DOM elements ***
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");


// *** Form data ***
const modalInputName = document.querySelector(".modal__input_content_name");
const modalInputProfession = document.querySelector(".modal__input_content_profession");
const modalInputCardName = document.querySelector(".modal__input_content_card-name");
const modalInputCardLink = document.querySelector(".modal__input_content_card-link");
*/


// *** Image Preview Modal ***
const imagePreviewModalEl = "modal_type_image-preview";
const imagePreviewEl = document.querySelector(".modal__image");
const captionPreviewEl = document.querySelector(".modal__caption");

// *** Cards ***
const cardSelector = ".card__template"; 

export {initialCards, cardSelector, placesList, profileEditButton, cardAddButton, editModalEl, editFormModal,
       addModalEl, addFormModal, imagePreviewEl, imagePreviewModalEl, captionPreviewEl}

