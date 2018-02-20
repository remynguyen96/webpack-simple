import '../css/app.scss';
// import Rx from 'rxjs/Rx';
// window.Rx = Rx;
// import './part1';
// import './part2';
// import './part3';
// import './part4';
// import './part5';
// import './part6';
// import './part7';
// import './part8';
// import './part9';
// import './part10';
// import './part11';
// import './part12';
// import './part13';
// import './part14';
// import './part15';
import ScrollReveal from 'scrollreveal/dist/scrollreveal.min';
window.sr = new ScrollReveal({
  viewFactor : 0.15,
  duration   : 800,
  distance   : "0px",
  scale      : 0.8,
});
sr.reveal("#test1", {
  origin   : "top",
  distance : "32px",
  duration : 600,
  scale    : 0
});
sr.reveal('.fooReveal', { container: '.fooContainer' });

const modal = document.querySelector('#modal-container');
document.querySelector('.btn2').addEventListener('click', modalClick);
document.querySelector('.btn4').addEventListener('click', modalClick);
function modalClick() {
  const effect = this.getAttribute('data-effect');
  modal.removeAttribute('class');
  modal.classList.add(effect);
  document.body.classList.add('modal-active');
};
modal.addEventListener('click', function() {
  let timeOut = null;
  if (timeOut) {
    clearTimeout(timeOut);
  } else {
    this.classList.add('out');
    document.body.classList.remove('modal-active');
    timeOut = setTimeout(() => {
      this.removeAttribute('class');
    }, 280)
  }
});

