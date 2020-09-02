class CardsUI {
  constructor() {
    this.container = document.querySelector('#field');
    this.failed = [];
    this.success = [];
  }

  get fieldContainer() {
    return this.container;
  }
  get failedCards() {
    this.failed = document.querySelectorAll('.fail');
    return this.failed;
  }
  get successCards() {
    this.success = document.querySelectorAll('.success');
    return this.success;
  }

  renderCards(cards) {
    this.clearField();

    if (!cards || !cards.length) {
      this.showErrorMsg();
      return;
    }

    let fragment = '';

    cards.forEach(cardIcon => {
      const template = CardsUI.cardTemplate(cardIcon);
      fragment += template;
    });

    this.container.insertAdjacentHTML('afterbegin', fragment);
  }

  clearField() {
    this.container.innerHTML = '';
  }

  showErrorMsg() {
    const template = CardsUI.errorMsgTemplate();
    this.container.insertAdjacentHTML('afterbegin', template);
  }

  markSuccess(cards) {
    cards.forEach(item => {
      item.classList.add('success');
    });
  }

  markFail(cards) {
    cards.forEach(item => {
      item.classList.add('fail');
    });
  }

  getImage(card) {
    if (!card) {
      return;
    }
    return card.querySelector('.card__image').innerHTML.trim();
  }

  //template
  static errorMsgTemplate() {
    return `<div class="error-message">Произошла ошибка генерации игровых карточек</div>`;
  }

  static cardTemplate(icon) {
    return `
    <div class="card">
      <div class="card__inner">
        <div class="card__back"></div>
        <div class="card__image">
          ${icon}
        </div>
      </div>
    </div>
    `;
  }
}

const cardsUI = new CardsUI();

export default cardsUI;
