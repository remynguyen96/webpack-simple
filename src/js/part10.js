// @flow
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/scan';

const btnIncrease = document.createElement('button');
btnIncrease.style.backgroundColor = '#58FF78';
btnIncrease.textContent = 'Increase';
btnIncrease.style.padding = '6px 20px';
const btnDecrease = document.createElement('button');
btnDecrease.style.backgroundColor = '#FF415C';
btnDecrease.style.padding = '6px 20px';
btnDecrease.textContent = 'Decrease';
const input = document.createElement('input');
input.style.padding = '6px 20px';
input.set('placeholder', 'Enter value here.....');
const score = document.createElement('div');
const value = document.createElement('div');
document.body.appendChild(score);
document.body.appendChild(value);
document.body.appendChild(input);
document.body.appendChild(btnIncrease);
document.body.appendChild(btnDecrease);

const obsIncrease = Observable.fromEvent(btnIncrease, 'click')
                    .map(() => state => Object.assign({}, state, { count: state.count + 1 }));
                    // .scan((state, changeFn) => changeFn(state), {count: 0});

const obsDecrease = Observable.fromEvent(btnDecrease, 'click')
                    .map(() => state => Object.assign({}, state, {count: state.count - 1}));

const obsInput = Observable.fromEvent(input, 'input')
                 .map((event) => state => Object.assign({}, state, {value: event.target.value}));

const stateObs = Observable.merge(
    obsIncrease,
    obsDecrease,
    obsInput
).scan((state, changeFn) => changeFn(state), {count: 0, value: ''});

let prevState = {};
const observer = {
    next: (state) =>  {
        if (state.count !== prevState.count) {
            score.textContent = `Score: ${state.count}`;
        }
        if (state.value !== prevState.value) {
            value.textContent = `Value: ${state.value}`;
        }
        prevState = state;
    },
    error: (error) =>  console.log(`Error: ${error}`),
    complete: () =>  console.log(`%cComplete !!!!`, 'font-size: 20px; background: #FF6C62'),
};

stateObs.subscribe(observer);






