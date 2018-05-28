import '../css/app.scss';
import M from 'materialize-css/dist/js/materialize.min';

M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelector('.carousel');
  const carouselItems = document.querySelectorAll('.carousel-item img');
  carouselItems.forEach((item) => {
    item.onclick = function(e) {
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
  const instance = M.Carousel.getInstance(elems);
  setInterval(() => {
    instance.next();
  }, 4800);
});


