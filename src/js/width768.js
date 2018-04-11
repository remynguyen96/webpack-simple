const headerNav = document.querySelector('.header-nav');
headerNav.remove();
const btnNav = document.querySelector('.mobl-btn');
const mainNav = document.querySelector('.mobl-main');
btnNav.addEventListener('click', function() {
  if (this.classList.contains('mobl-open')) {
    this.classList.remove('mobl-open');
    mainNav.classList.remove('mobl-main-open');
    document.body.classList.remove('modal-active');
  } else {
    this.classList.add('mobl-open');
    mainNav.classList.add('mobl-main-open');
    document.body.classList.add('modal-active');
  }
});
