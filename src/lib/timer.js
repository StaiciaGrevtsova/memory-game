class Timer {

  constructor(elem, time) {
    this.time = time;
    this.options = {
      elem: elem,
      isStopped: false,
    };
  }

  // Build elements
  build() {
    let timeElement = this.options.elem;

    // Minute element
    let minuteElement = document.createElement('span');
    minuteElement.className = 'minute';
    this.minuteElement = timeElement.appendChild(minuteElement);

    // Second element
    let secondElement = document.createElement('span');
    secondElement.className = 'second';
    this.secondElement = timeElement.appendChild(secondElement);

    // Initial time
    this.initTimer();

    // Invoke timer
    this.startTimer();
  }

  initTimer() {
    const minute = Math.floor(this.time / 60);
    const second = this.time % 60;

    this.minuteElement.innerHTML = (minute <= 9) ? `0${minute}:` : `${minute}:`;
    this.secondElement.innerHTML = (second <= 9) ? `0${second}` : second;
  }

  startTimer() {
    const _self = this;
    let timerInterval = setInterval(function() {
      if (!_self.options.isStopped) {
        _self.time--;

        if (_self.time === 0) {
          clearInterval(timerInterval);
          return _self.stop();
        }

        _self.initTimer();
      }
    }, 1000);
  }


  // Stop
  stop() {
    this.options.isStopped = true;
    this.initTimer(this.time);
  }

  static clearTimer(elem) {
    elem.innerHTML = '';
  }
}

export default Timer;
