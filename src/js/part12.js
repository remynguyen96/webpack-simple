// @flow
import { Scheduler } from 'rxjs/Scheduler';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import { interval } from 'rxjs/observable/interval';
import { scan, withLatestFrom } from 'rxjs/operators';
import { defer } from 'rxjs/observable/defer';

const ball = document.createElement('div');
ball.classList.add('ball');
document.body.insertAdjacentElement('beforeend', ball);

// ball.style.setProperty('--my-color', '#FF26E4');

// console.log(ball.animate([]))
const test = ball.animate([
    {
        opacity: 0,
        transform: 'translateY(100%)',
    },
    {
        opacity: 1,
        transform: 'translateY(0)',
    }
], {
    duration: 800,
    easing: 'ease-in-out',
    // direction: 'both',
});

const animationFrame$ = interval(0, Scheduler.animationFrame);
const docElm = document.documentElement;
const { clientWidth, clientHeight } = docElm;

const mouseMove$ = fromEvent(docElm, 'mousemove')
    .map(event => ({ x: event.clientX, y: event.clientY }));

const touchMove$ = fromEvent(docElm, 'touchmove')
    .map(event => ({
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
    }));

const move$ = merge(mouseMove$, touchMove$);

const lerp = (start, end) => {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const rate = 0.05;

    return {
        x: start.x + dx * rate,
        y: start.y + dy * rate,
    };
};

const smoothMove$ = animationFrame$.pipe(
        withLatestFrom(move$, (frame, move) => move),
        scan(lerp),
    );

const cardElm = document.createElement('div');
cardElm.setAttribute('id', 'card');
document.body.insertAdjacentElement('beforeend',cardElm);

smoothMove$.subscribe(pos => {
    const rotX = (pos.y / clientHeight * -50) + 25;
    const rotY = (pos.x / clientWidth * 50) - 25;
    cardElm.style.cssText = `
    transform: rotateX(${rotX}deg) rotateY(${rotY}deg);
  `;
});


// const msElapsed = (schedular = Scheduler.animationFrame) =>
//     defer(() => {
//         const start = schedular.now();
//         return Observable.interval(0, schedular)
//             .map(() => schedular.now() - start);
//     });

// const pixelsPerSecond = (v) => (ms) => v * ms / 1000;
// msElapsed()
//     .map(pixelsPerSecond(50))
//     .subscribe((frame) => ball.style.transform = `translate3d(0, ${frame}px, 0)`);

// Observable.interval(0, Scheduler.animationFrame).subscribe(
//     frame => {
//         ball.style.transform = `translate3d(0, ${frame}px, 0)`
//         // console.log(frame);
//     }
// );



