import '../css/app.scss';
(function(){
    window.onload = window.onresize = function() {
        if (window.innerWidth < 1024) {
            const menuMobile = document.querySelector('.menu-mobile');
            const menu = document.querySelector('.menu');
            menuMobile.onclick = function() {
                if (menu.classList.contains('open')) {
                    menu.classList.remove('open');
                    menuMobile.classList.remove('open');
                } else {
                    menu.classList.add('open');
                    menuMobile.classList.add('open');
                }
            }
        }
    }
})();
