// @flow
/**
 * @Description: Hot And Cold Observable
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';

const test = Observable.interval(500).take(4);

const observer = {
    observers: [],
    addObserver: function(observer) {
        this.observers.push(observer);
    },
    subscribe: function(observer) {
        this.observers.push(observer);
    },
    next: function(value) {
        this.observers.forEach(observer => observer.next(value));
    },
    error: function(err) {
        this.observers.forEach(observer => observer.error(err));
    },
    complete: function() {
        this.observers.forEach(observer => observer.complete());
    }
};

const observer1 = {
    next: (value) => console.log(`%c ${value}`, 'color: #FF473D; font-size: 18px'),
    error: err => console.log('first error: ' + err),
    complete: () => console.log('Complete !!!'),
};

const observer2 = {
    next: (value) => console.log(`%c ${value}`, 'color: #6356FF; font-size: 18px'),
    error: err => console.log('first error: ' + err),
    complete: () => console.log('Complete !!!'),
};


// observer.addObserver(observer1);
// test.subscribe(observer);
// setTimeout(() => {
//     observer.addObserver(observer2);
// }, 1000)

observer.subscribe(observer1);
test.subscribe(observer);
setTimeout(() => {
    observer.subscribe(observer2);
}, 1500);
