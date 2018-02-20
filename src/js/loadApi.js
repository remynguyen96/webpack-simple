// @flow
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/fromPromise';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/delay';


const retryStrategy = ({attempts= 4, delay= 1000}= {}) => {
    return (errors) => {
        return errors.scan((acc, value) => {
            if (acc < attempts){
                console.log(acc, value);
                return acc += 1;
            } else {
                throw new Error(value);
            }
        }, 0).delay(delay);
    }

    // return (errors) => {
    //     return errors.scan((acc, value) => {
    //         console.log(acc, value);
    //         return acc + 1;
    //     }, 0)
    //         .takeWhile(acc => acc < attempts)
    //         .delay(delay);
    // }
};

export const load = (url: string) => {
    return Observable.create(observer => {
        let xhr = new XMLHttpRequest();
        const onLoad = () => {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                observer.next(data);
                observer.complete();
            } else {
                observer.error(xhr.statusText);
            }
        };
        xhr.addEventListener('load', onLoad);
        xhr.open('GET', null);
        xhr.send();
        // return () => {
        //     console.log('cleanup');
        //     xhr.removeEventListener('load', onLoad);
        //     xhr.abort();
        // }
    }).retryWhen(retryStrategy({attempts:4, delay: 1500}));
};

export const ajaxApi = (url: string) => {
    return Observable.ajax({
        url,
        method: 'GET',
    }).pluck('response')
      .retryWhen(retryStrategy({attempts:4, delay: 1500}));
};

export const fetchApi = (url: string) => {
    return Observable.defer(() => {
        return Observable.fromPromise(
            fetch(url, {method: 'GET'}).then(e => {
                if (e.status === 200) {
                    return e.json();
                } else {
                    return Promise.reject(e);
                }
            })
        ).retryWhen(retryStrategy());
         // .catch(err => Observable.empty());
    });
};
