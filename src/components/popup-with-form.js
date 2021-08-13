import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);

        this._popupForm = this._popupElement.querySelector('.modal__form');
        this._handleFormSubmit =  handleFormSubmit;
    }

    _getInputValues() {
        this._formElement = document.querySelector('.modal__form');
        this._inputElements = Array.from(this._formElement.querySelectorAll('.modal__input'));
        
        this._formValues = {};

        this._inputElements.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    close = () => {
        this._popupForm.reset();
        super.close();
    }

    setEventListeners() {
        this._closeButton = this._popupElement.querySelector('.modal__close-button');

        this._popupForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this.close();
        })

        this._closeButton.addEventListener("click", (evt) => {
            evt.preventDefault;
            this._popupForm.reset();
            this.close();
        })
        super.setEventListeners();
    }
}
