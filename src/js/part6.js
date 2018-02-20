// @flow
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

const observable = Observable.of(1, 2, 3);
const stream = observable.startWith('Start with 0');
stream.subscribe(value => console.log(value));

const button = document.querySelector('button');
const observable1 = Observable.fromEvent(button, 'click');
const observable2 = Observable.interval(1000);

observable1.switchMap(() => observable2)
    .subscribe(value => console.log(value));

// observable1.subscribe(
//     value => observable2.subscribe(
//         result => console.log(result),
//     )
// )
