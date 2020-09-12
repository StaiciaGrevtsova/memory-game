class ModalUI {
  constructor() {
    this.overlay = document.querySelector('.popup-overlay');
    this.popup = document.querySelector('.popup__wrapper');
  }

  get popupContainer() {
    return this.popup;
  }

  renderModal(status, button) {
    this.clearModal();
    const text = this.renderLetters(status);

    let fragment = '';
    const template = ModalUI.modalTemplate(status, text, button);
    fragment += template;

    this.popup.insertAdjacentHTML('afterbegin', fragment);
  }

  renderLetters(text) {
    const statusLetters = text.split('');
    let fragment = '';
    statusLetters.forEach(letter => {
      const template = ModalUI.lettersTemplate(letter);
      fragment += template;
    })

    return fragment;
  }

  clearModal() {
    this.popup.innerHTML = '';
  }

  openModal(status) {
    if (!this.overlay || !this.popup) {
      return;
    }
    this.overlay.style.opacity = '1';
    if (status === 'success') {
      this.renderModal('Win', 'Play again');
    } else {
      this.renderModal('Lose', 'Try again');
    }
    this.popup.style.transform = 'scale(1)';
  }

  closeModal() {
    this.overlay.style.opacity = '0';
    this.popup.style.transform = 'scale(0)';
  }

  static lettersTemplate(letter) {
    return `
    <span>${letter}</span>
    `;
  }

  static modalTemplate(status, text, buttonText) {
    return `
    <div class="popup">
      <div class="popup__text">
        ${text}
      </div>
      <div class="popup__btn">
        <button id="play" class="button--${status}">${buttonText}</button>
      </div>
    </div>
    `;
  }
}

const modalUI = new ModalUI();

export default modalUI;
