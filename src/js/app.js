import '../css/app.scss';
import '../css/app.less';
import * as WebFont from 'webfontloader';
WebFont.load({
    custom: {
        families: ['Roboto'],
        urls: ['https://fonts.googleapis.com/css?family=Roboto:400,500,700&subset=latin,vietnamese']
    },   
});
// import * as FastClick from 'fastclick';
// import './functions.js';
// window.addEventListener('load', function () {
//     let textInput = document.querySelector('#input1');
//     // FastClick['attach'](document.body);
//     /*
//      *@Description: Part 1
//      */
//     Array.prototype.forEach.call(document.getElementsByClassName('test1'), function (testEl) {
//         testEl.addEventListener('click', function () {
//             textInput.focus();
//         }, false)
//     });
//
//     /*
//      * @Description: Part 2
//      */
//     let testA, testB, teTime, cTime;
//     testA = document.getElementById('test-a');
//     testB = document.getElementById('test-b');
//     // Android 2.2 needs FastClick to be instantiated before the other listeners so that the stopImmediatePropagation hack can work.
//     testA.addEventListener('touchend', function (event) {
//         teTime = Date.now();
//         document.getElementById('te-time').value = teTime;
//     }, false);
//
//     testA.addEventListener('click', function (event) {
//         cTime = Date.now();
//         document.getElementById('c-time').value = cTime;
//         document.getElementById('d-time').value = cTime - teTime;
//         testA.style.backgroundColor = testA.style.backgroundColor ? '' : 'YellowGreen';
//     }, false);
//
//     testB.addEventListener('touchend', function (event) {
//         teTime = Date.now();
//         document.getElementById('te-time').value = teTime;
//         document.getElementById('d-time').value = cTime - teTime;
//     }, false);
//
//     testB.addEventListener('click', function (event) {
//         cTime = Date.now();
//         document.getElementById('c-time').value = cTime;
//         testB.style.backgroundColor = testB.style.backgroundColor ? '' : 'YellowGreen';
//     }, false);
//
//
// }, false);

