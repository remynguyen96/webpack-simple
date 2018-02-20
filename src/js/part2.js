// @flow
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';

const circle = document.querySelector('.circle');
const eventMouse = Observable.fromEvent(document, 'mousemove')
                                .map((event: MouseEvent) => ({
                                    x: event.clientX,
                                    y: event.clientY,
                                }))
                                .filter(value => value.x > 100)
                                .delay(80);
const customCircle = (value) => {
    const { x, y } = value;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
};
eventMouse.subscribe(
    customCircle,
    err => console.log(`error: ${err}`),
    complete => console.log('complete !!!!'),
);
