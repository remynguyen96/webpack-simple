import '../css/style.scss';
import jQuery from 'jquery';
import * as WebFont from 'webfontloader';
import * as FastClick from 'fastclick';
window.$ = jQuery;
WebFont.load({
    custom: {
        families: ['Roboto'],
        urls: ['https://fonts.googleapis.com/css?family=Roboto:400,500,700&subset=latin,vietnamese']
    },
});

