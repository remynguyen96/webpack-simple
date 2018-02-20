// @flow
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/Subscription';

import {fetchApi, ajaxApi, load} from './loadApi';

const button = document.querySelector('button');
const getAPI = Observable.fromEvent(button, 'click');

let subscription: Subscription;

const printData = (data) => {
    console.log(data);
    data.forEach((item) => {
        const div = document.createElement('div');
        div.innerText = item.title;
        document.body.appendChild(div);
    });
};


const apiJSON = 'http://localhost:3000/src/js/data.json';

getAPI.flatMap(() => fetchApi(apiJSON))
    .subscribe(
        printData,
        err => err,
        () => console.log('complete !!'),
    );

// subscription = load(apiJSON).subscribe(
//     printData,
//     err => console.log(`Error: ${err}`),
//     () => console.log('comlete !!!'),
// );
// subscription.unsubscribe();
