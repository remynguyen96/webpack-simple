import '../css/app.scss';
// import jQuery from 'jquery';
import './animate1';
import * as WebFont from 'webfontloader';
// import * as FastClick from 'fastclick';
// window.$ = jQuery;
WebFont.load({
    custom: {
        families: ['Roboto'],
        urls: ['https://fonts.googleapis.com/css?family=Roboto:400,500,700']
    },
});
// FastClick.attach(document.body);


var isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)


// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){setTimeout(f, 1000/60)}

var bubble1 = document.getElementById('bubbles1')
var bubble2 = document.getElementById('bubbles2')
var fish = document.getElementById('fish')

var scrollheight = 	document.body.scrollHeight // height of entire document
var windowheight = window.innerHeight // height of browser window


function parallaxbubbles(){
    var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
    var scrollamount = (scrolltop / (scrollheight-windowheight)) * 100 // get amount scrolled (in %)
    bubble1.style.top = -scrolltop * .2 + 'px' // move bubble1 at 20% of scroll speed
    bubble2.style.top = -scrolltop * .5 + 'px' // move bubble2 at 50% of scroll speed
    fish.style.left = -100 + scrollamount + '%'

}

if (!isiOS){
    window.addEventListener('scroll', function(){ // on page scroll
        requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen repaint
    }, false)

    window.addEventListener('resize', function(){ // on window resize
        var scrollamount = (scrolltop / (scrollheight-windowheight)) * 100 // get amount scrolled (in %)
        fish.style.left = -100 + scrollamount + '%'
    }, false)
}



// import * as FastClick from 'fastclick';
// import './functions.js';
// window.addEventListener('load', function () {
//     let textInput = document.querySelector('#input1');"
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

