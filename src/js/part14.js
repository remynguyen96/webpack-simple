// @flow

import { fromEvent } from 'rxjs/observable/fromEvent';
import { interval } from 'rxjs/observable/interval';
import { empty } from 'rxjs/observable/empty';
import {startWith, scan, tap, switchMap, map } from 'rxjs/operators';

const button = document.createElement('button');
button.innerText = 'Play';
button.style.padding = '6px 35px';
button.style.cursor = 'pointer';
button.style.borderRadius = '2px';
button.style.border = 'none';
button.style.backgroundColor = '#4e74ff';
button.style.color = '#ffffff';
button.style.display = 'block';
button.style.margin = '0 auto';
document.body.insertAdjacentElement('beforeend', button);

const div = document.createElement('div');
div.style.display = 'block';
div.style.width = '0';
div.style.height = '2px';
div.style.backgroundColor = '#4f19a7';
div.style.marginTop = '25px';
document.body.insertAdjacentElement('beforeend', div);

let width = 0;
const increateWidth = interval(1000).pipe(
    tap(() => {
        width < 100 ? width += 10 : width = 0;
        div.style.width = `${width}%`;
    }),
);
const empty$ = empty();

const clickObs = fromEvent(button, 'click').pipe(
    scan(acc => !acc, false),
    tap(value => value ? button.innerText = 'Pause' : button.innerText = 'Play'),
    startWith(false),
    switchMap(value => value ? increateWidth : empty$),
);

const observer = {
    next(value) {
        console.log(value);
    },
    error(error) {
        console.log(`Error: ${error}`);
    },
    complete() {
        console.log(`%c Complete Done !!!`, 'color: #FF473D; font-size: 18px');
    }
};

clickObs.subscribe(observer);
