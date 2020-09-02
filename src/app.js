import './style.css';
import images from './store/cardImages';
import cardsUI from './views/cards';
import modalUI from './views/modal';
import game from './component/game';
import Timer from './lib/timer';

document.addEventListener('DOMContentLoaded', () => {
  initGame().then();

  const startMessage = document.querySelector('#start-message');
  const startButton = document.querySelector('#start');
  const field = cardsUI.fieldContainer;
  const cardClass = '.card';
  const buttonId = '#play';
  const popup = modalUI.popupContainer;

  //set timer
  const timerElem = document.querySelector('#timer');
  const defaultTimer = 60;
  let timer = setTimer(timerElem, defaultTimer);

  //handlers
  async function initGame() {
    await images.init();
    cardsUI.renderCards(images.imagesList);
  }

  function setTimer(elem, time) {
    Timer.clearTimer(timerElem);
    return new Timer(elem, time);
  }

  function checkTime() {
    const timeIsOver = setInterval(() => {
      if(timer.time === 0) {
        modalUI.openModal('fail');
        clearInterval(timeIsOver);
      }
    }, 1000);
  }

  function startGame() {
    timer = setTimer(timerElem, defaultTimer);
    timer.build();
    checkTime();
  }

  function checkFinishGame() {
    const successCards = [...cardsUI.successCards].length;
    return successCards === images.cardCount;
  }

  //events
  startButton.addEventListener('click', function(e) {
    startMessage.classList.add('start-message--disable');
    field.classList.remove('field--disable');
    startGame();
  });

  field.addEventListener('click', function(e) {
    const elem = e.target;
    if (!elem.closest(cardClass)) {
      return;
    }
    game.openCard([elem.closest(cardClass)]);

    const openingCardCount = game.openingCardsCount();
    const [openingCardFirst, openingCardSecond] = game.openingCardList;
    game.compareCardPair(openingCardFirst, openingCardSecond);

    if(openingCardCount === 2 && !game.compareCardPair(openingCardFirst, openingCardSecond)) {
      setTimeout(function() {
        game.closeCard([openingCardFirst, openingCardSecond]);
      }, 800)
    }

    const finish = checkFinishGame();
    if (finish) {
      timer.stop();
      setTimeout(function () {
        modalUI.openModal('success')
      }, 500);
    }
  });

  popup.addEventListener('click', function(e) {
    const elem = e.target;
    if (!elem.closest(buttonId)) {
      return;
    }

    modalUI.closeModal();
    initGame().then(function() {
      startGame();
    });
  });

});

