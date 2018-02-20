// @flow
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';


const inputFirst = document.createElement('input');
inputFirst.placeholder = 'First Name';
const inputLast = document.createElement('input');
inputLast.placeholder = 'Last Name';
const spanText = document.createElement('span');
spanText.style.display = 'block';
spanText.textContent = 'Name here ....';
document.body.appendChild(inputFirst);
document.body.appendChild(inputLast);
document.body.appendChild(spanText);

const observable1 = Observable.fromEvent(inputFirst, 'input');
const observable2 = Observable.fromEvent(inputLast, 'input');

const mergeObs = observable1.mergeMap(obs1 => {
    return observable2.map(obs2 => {
        return `${obs1.target.value} ${obs2.target.value}`;
    });
});
mergeObs.subscribe(value => spanText.textContent = value);
