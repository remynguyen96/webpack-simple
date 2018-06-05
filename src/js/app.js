import '../css/app.scss';
// import product from '../images/product4.jpg';
// import logo from '../images/logo-footer.png';
import M from 'materialize-css/dist/js/materialize.min';
// import ScrollReveal from 'scrollreveal/dist/scrollreveal.min';

M.AutoInit();
const functionSlider = () => {
  const carouselPrimary = document.querySelector('.slider-component > .carousel');
  if (carouselPrimary) {
    M.Carousel.init(carouselPrimary, {
      duration: 400,
      fullWidth: false,
      dist: 0,
      indicators: true
    });
    // const instance = M.Carousel.getInstance(carouselPrimary);
    // setInterval(() => {
    //   instance.next();
    // }, 4800);
  }
};
const scrollNav = () => {
  const nav = document.querySelector('.vinhome-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      const { scrollY } = window;
      if ((scrollY - 10) > nav.offsetHeight) {
        nav.classList.add('nav-scroll');
      } else {
        nav.classList.remove('nav-scroll');
      }
    });
  }
};
document.addEventListener('DOMContentLoaded', function() {
  functionSlider();
  // scrollNav();
});
// /*Scroll Animation Page*/
// const sr = new ScrollReveal({
//   viewFactor : 0.15,
//   duration   : 800,
//   distance   : "10px",
//   scale      : 0.85,
// });
// const configReveal = (origin= "top", distance= "50px", scale= 0) => ({
//   origin,
//   distance,
//   duration: 1200,
//   scale,
// });


