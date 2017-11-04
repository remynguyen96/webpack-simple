import '../css/app.scss';
import * as WebFont from 'webfontloader';
// import jQuery from 'jquery';
// import * as FastClick from 'fastclick';
// window.$ = jQuery;
WebFont.load({
    custom: {
        families: ['Roboto'],
        urls: ['https://fonts.googleapis.com/css?family=Roboto:400,500,700&subset=latin,vietnamese']
    },
});

let links = document.querySelectorAll('.link-bar');
links.forEach((link) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let parent = link.parentNode;
        parent.classList.contains('active') ? parent.classList.remove('active') : parent.classList.add('active');
   }, false);
});