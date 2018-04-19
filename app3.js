/**
 * @Description: Observer Pattern
 */
class Car {
  constructor() {
    this._currentSpeed = 0;
    this.speedObserver = [];
  }

  subscribeSpeedObserver(observer) {
    if (observer.notify) {
      this.speedObserver.push(observer);
    } else {
      throw new Error('Invalid observer notify implementation missing !');
    }
  }

  unSubscribeSpeedObserver(observer) {
    const index = this.speedObserver.indexOf(observer);
    if (index > 0) {
      this.speedObserver.splice(index, 1);
    }
  }

  notifySpeedObserver(newValue, oldValue) {
    for (let observer of this.speedObserver) {
      observer.notify(newValue, oldValue);
    }
  }

  get currentSpeed() {
    return this._currentSpeed;
  }

  set currentSpeed(value) {
    const oldValue = this._currentSpeed;
    this._currentSpeed = value;
    if (oldValue !== this._currentSpeed) {
      this.notifySpeedObserver(this._currentSpeed, oldValue);
    }
  }
}

class CurrentSpeedConsoleObserver {
  notify(newValue, oldValue) {
    console.log(`Current speed changed from ${oldValue} to ${newValue}`);
  }
}

class DOMCarSpeedObserver {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  notify(newValue, oldValue) {
    this.element.textContent = newValue;
  }
}

let car = new Car();
let consoleObserver = new CurrentSpeedConsoleObserver();
let domObserver = new DOMCarSpeedObserver("#speedometer");
car.subscribeSpeedObserver(consoleObserver);
car.subscribeSpeedObserver(domObserver);
const interVal = setInterval(() => {
  car.currentSpeed += 10;
}, 1000);

setTimeout(() => {
  clearInterval(interVal);
}, 10000);
