// @flow
// import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

const numbers: number[] = [1, 5, 10];
const source = Observable.from(numbers);
class MyObserver implements Observer {
    next(value) {
        console.log(`value: ${value}`);
    }
    error(e) {
        console.log(`error: ${e}`);
    }
    complete() {
        console.log('complete !!!');
    }
}
source.subscribe(new MyObserver());
const source2 = Observable.create(observer => {
    // for (let i of numbers) {
    //     if (i === 5) {
    //         observer.error('Something went wrong !');
    //     }
    //     observer.next(i);
    // }
    // observer.complete();
    let index = 0;
    const produceValue = () => {
        observer.next(numbers[index++]);
        if (index < numbers.length) {
            setTimeout(produceValue, 500);
        } else {
            observer.complete('done !!!!');
        }
    };
    produceValue();
}).map(numbers => numbers * 2)
  .filter(numbers => numbers > 5);
source2.subscribe(
    result => console.log(result),
    err => console.log(`err: ${err}`),
    () => console.log('done !'),
);
