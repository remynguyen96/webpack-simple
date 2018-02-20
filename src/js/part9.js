// @flow
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/zip';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';

const button = document.querySelector('button');

const observable1 = Observable.fromEvent(button, 'click');

observable1.map(() => (Math.random() * 10) >> 1)
        .do(score => console.log(score))
        .scan((scoreBefore, score) => scoreBefore + score)
        .subscribe(value => {
            const p = document.createElement('p');
            document.body.appendChild(p);
            p.textContent = `Total Core: ${value}`
        });

/*----------------------------------------------------------------*/

const timer$ = Observable.interval(1000);
const pieces$ = Observable.of('', '♞', '', '♞', '♘', '♞');
const columns$ = Observable.of('e', 'c', 'g', 'd', 'e', 'f');
const rows$ = Observable.of('4', '6', '4', '4', '2', '3');

const observable = Observable.zip(
    timer$,
    pieces$,
    columns$,
    rows$,
);
observable.subscribe(value => console.log(value));
