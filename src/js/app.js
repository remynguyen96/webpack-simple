import '../css/app.scss';
import M from 'materialize-css/dist/js/materialize.min';

M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
  const heightWindow = window.innerHeight;
  const nav = document.querySelector('.nav-vh');
  const elems = document.querySelector('.carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const carouselImages = document.querySelectorAll('.carousel-item img');
  const minHeight = `${heightWindow - nav.offsetHeight}px`;
  elems.style.minHeight = minHeight;
  carouselItems.forEach((item) => {
    item.style.minHeight = minHeight;
  });
  carouselImages.forEach((img) => {
    img.onclick = function(e) {
      const href = e.target.getAttribute('attr-href');
      // console.log(href, 'href');
    }
  });
  const options = {
    duration: 400,
    fullWidth: false,
    dist: 0,
    indicators: true
  };
  M.Carousel.init(elems, options);
  // const instance = M.Carousel.getInstance(elems);
  // setInterval(() => {
  //   instance.next();
  // }, 4800);
});


