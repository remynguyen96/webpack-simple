// @flow
import { timer } from 'rxjs/observable/timer';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map, switchMap, mapTo, scan, takeWhile, tap, startWith } from 'rxjs/operators';

/**
 * @Description: Create Dom Element For Examble
 */
const input = document.createElement('input');
input.type = 'number';
const button = document.createElement('button');
button.textContent = 'Update';
const h4 = document.createElement('h4');
h4.textContent = 0;
const arr = [input, button, h4];
let i = 0;
while(i < 3) {
  document.body.insertAdjacentElement('beforeend', arr[i]);
  i++;
}

const takeUntilFunc = (endRange, currentNumber) => {
  return endRange > currentNumber
      ? val => val <= endRange
      : val => val >= endRange;
};

const positiveOrNegative = (endRange, currentNumber) => {
    return endRange > currentNumber ? 1 : -1;
};


const subscription = (currentNumber = 0) => fromEvent(button, 'click').pipe(
    map(_ => (input.value) >> 0),
    switchMap(endRange => {
        return timer(0, 20).pipe(
            mapTo(positiveOrNegative(endRange, currentNumber)),
            startWith(currentNumber),
            scan((acc, curr) => acc + curr),
            takeWhile(takeUntilFunc(endRange, currentNumber))
        );
    }),
    tap(v => currentNumber = v),
    startWith(currentNumber)
);

const updateHTML = val => h4.innerHTML = val;

subscription().subscribe(updateHTML);
