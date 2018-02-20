// @flow
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/withLatestFrom';

import {fromJS} from 'immutable';

const initialState = fromJS({
    title: '',
    status: false,
});
const arrTodo = [];

const input = document.createElement('input');
input.style.padding = '6px 20px';
input.setAttribute('placeholder', 'Enter todo here.....');
document.body.appendChild(input);

const btnAdd = document.createElement('button');
btnAdd.style.backgroundColor = '#58FF78';
btnAdd.style.color = '#ffffff';
btnAdd.style.padding = '6px 20px';
btnAdd.style.marginLeft = '15px';
btnAdd.textContent = 'Add Todo';
document.body.appendChild(btnAdd);

const divAll = document.createElement('div');
divAll.id = 'root-todo';
document.body.appendChild(divAll);
const createElTodo = (todo) => {
    if (arrTodo && arrTodo.length > 0) {
        const div = document.createElement('div');
        const button = document.createElement('button');
        button.style.backgroundColor = '#FF415C';
        button.style.color = '#ffffff';
        button.style.padding = '4px 10px';
        button.textContent = 'X';
        const span = document.createElement('span');
        span.textContent = todo.title;
        div.appendChild(span);
        div.appendChild(button);
        divAll.appendChild(div);
        const obsRemove = Observable.fromEvent(button, 'click')
            .map(() => todo.title);
        obsRemove.subscribe(value => {
            const index = arrTodo.findIndex(todo => value === todo.title);
            arrTodo.splice(index, 1);
            divAll.innerHTML = '';
            arrTodo.forEach(todo => createElTodo(todo));
        });
    }
};


const inputTodo = Observable.fromEvent(input, 'input')
    .debounceTime(350)
    .distinctUntilChanged();
const addTodo = Observable.fromEvent(btnAdd, 'click');

// const observable = Observable.zip(
//                      inputTodo,
//                      addTodo,
//                      (title, _) => state => state.set('title', title).set('status', true)
//                    )
//                    .scan((state, changeFn) => changeFn(state), initialState);

const observable = addTodo.withLatestFrom(
    inputTodo,
    (_, event) => state => {
        const title = event.target.value;
        event.target.value = '';
        return state.set('title', title).set('status', true);
    }
)
    .scan((state, changeFn) => changeFn(state), initialState);

const observer = {
    next: (state) => {
        const {title} = state.toJS();
        const findTodo = arrTodo.findIndex(item => title === item.title);
        if (findTodo === -1) {
            arrTodo.push(state.toJS());
            console.log(arrTodo);
            divAll.innerHTML = '';
            arrTodo.forEach(todo => createElTodo(todo));
        }
    },
    error: (error) => console.log(`Error: ${error}`),
    complete: () => console.log(`%cComplete !!!!`, 'font-size: 20px; background: #FF6C62'),
};

observable.subscribe(observer);






