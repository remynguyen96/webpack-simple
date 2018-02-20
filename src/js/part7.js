// @flow
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const div = document.createElement('div');
      document.body.appendChild(div);

const clickEventEmitter = new BehaviorSubject('Hello Everyone !!!');
const button = document.querySelector('button');

const observableClick = Observable.fromEvent(button, 'click');

observableClick.subscribe(() => clickEventEmitter.next('Good Job !!!'));

clickEventEmitter.subscribe((value) => div.innerText = value);

