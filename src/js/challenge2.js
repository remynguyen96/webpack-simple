/**
 * @Description: Challenge 2
 */
import '../css/challenge2.scss';

const element = document.querySelector('.project');

class NewWork {
    constructor(el) {
        this.el = el;
    }

    initProject() {
        console.log('hehehe');
        console.log(this.el);
    }
}

// the same
function NewWork2(el) {
    this.el = el;
}

NewWork2.prototype.initProject = function () {
    console.log('goodboy');
    console.log(this.el);
}
/**
 * @Description: Smooth Scroll
 */
let targetOffset, currentPosition,
    body = document.body,
    button = document.getElementById('btn-scroll');

function getPageScroll() {
    let yScroll;
    if (window.scrollY) {
        yScroll = window.scrollY;
    } else if (document.documentElement && document.documentElement.scrollTop) {
        yScroll = document.documentElement.scrollTop;
    } else if (document.body) {
        yScroll = document.body.scrollTop;
    }
    return yScroll;
}

button.addEventListener('click', function (e) {
    e.preventDefault();
    targetOffset = document.getElementById(e.target.hash.substr(1)).offsetTop;
    currentPosition = getPageScroll();
    let offsetTarget = targetOffset - currentPosition;
    body.classList.add('in-transition');
    body.style.WebkitTransform = `translate(0, -${offsetTarget}px)`;
    body.style.MozTransform = `translate(0, -${offsetTarget}px)`;
    body.style.transform = `translate(0, -${offsetTarget}px)`;
    window.setTimeout(smoothScroll, 900);
    // (!window.requestAnimationFrame)
    //     ? window.setTimeout(smoothScroll, 900)
    //     : requestAnimationFrame(smoothScroll);
}, false);

function smoothScroll() {
    body.classList.remove('in-transition');
    body.removeAttribute('style');
    window.scrollTo(0, targetOffset);

}

/**
 * @Description: JavaScript Event Capture, Propagation and Bubbling
 */
const divs = document.querySelectorAll('.divs');

function logText(e) {
    console.log(this.classList.value);
    // e.stopPropagation();     // stop bubbling
}

// document.body.addEventListener('click', logText);

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,  //default is false
    once: false
}));
document.documentElement.style.setProperty('--base', '#41FF8C');
/**
 * @Description: hover menu
 */
const links = document.querySelectorAll('.linkItem');
let createSpan = document.createElement('span');
createSpan.id = 'spanHover';
document.body.appendChild(createSpan);

function onHoverable() {
    const linkCoords = this.getBoundingClientRect();
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX,
    }
    createSpan.style.setProperty('width', `${coords.width}px`);
    createSpan.style.setProperty('height', `${coords.height}px`)
    createSpan.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

links.forEach(link => link.addEventListener('mouseenter', onHoverable));

/**
 * @Description: Scroll Menu
 */
let menu = document.querySelector('.menu');
let lastScrollPosition = 0;
window.onscroll = function (e) {
    if (window.scrollY >= (menu.offsetTop + menu.offsetHeight)) {
        menu.classList.add('acitveMenu');
        menu.style.setProperty('top', `-${menu.offsetHeight}px`);
        if(lastScrollPosition > window.scrollY) {
            menu.style.top = 0;
        }
        lastScrollPosition = window.scrollY;
    } else {
        menu.classList.remove('acitveMenu');
    }
}
/**
 * @Description: parallax
 */
let posY, images;
function parallax() {
    posY = window.scrollY;
    images = document.getElementById('img');
    images.style.setProperty('top', (posY * .7)+ "px");
}
window.addEventListener('scroll', parallax);

