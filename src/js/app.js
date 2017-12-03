import '../css/style.scss';
/**
 * @Description: Import Images;
 */
import '../images/logo-darkhorse.png';
import '../images/Icon.png';
import '../images/image1.png';
import '../images/image2.png';
import '../images/image3.png';
import '../images/image4.png';
import '../images/image5.png';
import '../images/image6.png';
import '../images/image7.png';
import '../images/image8.png';
import '../images/image9.png';
import '../images/image10.png';
import '../images/image11.png';
import '../images/image12.png';
import '../images/image13.png';
import '../images/image14.png';
import '../images/person1.png';
import '../images/person2.png';
/**
 * @Description: Library useful for site
 */
import jQuery from 'jquery';
import * as WebFont from 'webfontloader';
import * as FastClick from 'fastclick';

window.$ = jQuery;
WebFont.load({
    custom: {
        families: ['Roboto'],
        urls: ['https://fonts.googleapis.com/css?family=Roboto:400,500,700']
    },
});
FastClick.attach(document.body);
/**
 * @Description: Menu
 */
if (window.innerWidth <= 768) {
    const menuIcon = $('.menu-icon');
    const listMenu = $('.menu-header');
    const translate = $('.translate');
    const body = $('body');
    menuIcon.click(() => {
        if (menuIcon.hasClass('active')) {
            translate.removeClass('active');
            listMenu.removeClass('active');
            menuIcon.removeClass('active');
            body.removeClass('active');
        } else {
            translate.addClass('active');
            listMenu.addClass('active');
            menuIcon.addClass('active');
            body.addClass('active');
        }
    });
}
/**
 * @Description: Active menu
 */
const url = window.location.href;
const link = $('.item-link');
for(let item = 1, length = link.length; item < length; item++ ) {
    if(link[item].getAttribute('href') === url) {
        link[item].classList.add('active');
    }
}
/**
 * @Description: Tab Contact
 */
const tabInfo = $('contact-menu-info');
const tabCareer = $('contact-menu-career');


