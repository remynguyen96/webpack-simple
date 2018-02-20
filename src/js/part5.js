// @flow
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/multicast';
import { Subject } from 'rxjs/Subject';

const coldObserver = Observable.create(observer => {
    const x: number= Math.random();
    observer.next(x);
});
const hotObserver = coldObserver.publish();

hotObserver.subscribe(value => console.log(value));
hotObserver.subscribe(value => console.log(value));

hotObserver.connect();
/* ----------------------------------------------------------------- */
const observable = Observable.fromEvent(document, 'click');
const clicks = observable.do(() => console.log('Do One Times'));

const subject = clicks.multicast(() => new Subject());

const SubA = subject.subscribe(c => console.log(`Sub A ${c.timeStamp}`));
const SubB = subject.subscribe(c => console.log(`Sub B ${c.timeStamp}`));

subject.connect();

