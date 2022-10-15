import View from './View.js';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded.'
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShow();
    this._addHandlerClose();
  }

  toggleWindow() {
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  _addHandlerShow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this)); // the this keyword inside this function would have been the button that the event listener is attached to so instead i have bound it to the current object
  }

  _addHandlerClose() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)]; // form data is a weird object that you can spread
      // this points to this._parentElement because we're in a handler function
      const data = Object.fromEntries(dataArr);
      handler(data); // API calls happen in the model so this is a way of getting this data to the model - creating a controller function that will be the handler of this event
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
