import cardsUI from '../views/cards';

class Game {
  constructor() {
    this.openingList = [];
  }

  get openingCardList() {
    this.openingList = document.querySelectorAll('.is-flipped:not(.success):not(.fail)')
    return this.openingList;
  }

  openCard(cards) {
    cards.forEach(card => {
      if (card.classList.contains('success')) {
        return;
      }
      card.classList.add('is-flipped');
    });
  }

  closeCard(cards) {
    cards.forEach(card => {
      card.classList.remove('is-flipped');
      card.classList.remove('fail');
    });
  }

  //считаем количество открытых карточек
  openingCardsCount() {
    if (!this.openingCardList || !this.openingCardList.length) {
      return 0;
    }
    return this.openingCardList.length;
  }

  //сравниваем 2 карточки
  compareCardPair(cardFirst, cardSecond) {
    if (!cardFirst || !cardSecond) return;
    const imageFirst = cardsUI.getImage(cardFirst);
    const imageSecond = cardsUI.getImage(cardSecond);

    if (imageFirst === imageSecond) {
      cardsUI.markSuccess([cardFirst, cardSecond]);
      return true;
    }
    cardsUI.markFail([cardFirst, cardSecond]);
    return false;
  }

}

const game = new Game();

export default game;
