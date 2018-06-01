import '../css/app.scss';
import M from 'materialize-css/dist/js/materialize.min';
import ScrollReveal from 'scrollreveal/dist/scrollreveal.min';

M.AutoInit();
const functionSlider = () => {
  const carouselPrimary = document.querySelector('.slider-component > .carousel');
  if (carouselPrimary) {
    const carouselImages = document.querySelectorAll('.info-vh');
    if (carouselImages.length) {
      carouselImages.forEach((img) => {
        img.onclick = (e) => {
          const href = e.target.getAttribute('attr-href');
          window.open(href, '_blank');
        }
      });
    }
    M.Carousel.init(carouselPrimary, {
      duration: 400,
      fullWidth: false,
      dist: 0,
      indicators: true
    });
    const instance = M.Carousel.getInstance(carouselPrimary);
    setInterval(() => {
      instance.next();
    }, 4800);
  }
};
const scrollNav = () => {
  const nav = document.querySelector('.nav-vh');
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
  scrollNav();
  /*Parallax*/
  const parallax = document.querySelector('.parallax');
  if (parallax) {
    M.Parallax.init(parallax, {});
  }
  /*Tab Detail*/
  const tabs = document.querySelector('.tabs-detail');
  const sliderTab = document.querySelector('.content.carousel');
  if (tabs && sliderTab) {
    M.Tabs.init(tabs, { swipeable: true });
    M.Carousel.init(sliderTab, {
      duration: 450,
      fullWidth: true,
      dist: 0,
    });
    const instance = M.Carousel.getInstance(sliderTab);
    instance.dragged = true;
    instance.pressed = true;
  }
});
/*Scroll Page*/
const sr = new ScrollReveal({
  viewFactor : 0.15,
  duration   : 800,
  distance   : "10px",
  scale      : 0.85,
});
const configReveal = (origin= "top", distance= "50px", scale= 0) => ({
  origin,
  distance,
  duration: 1200,
  scale,
});
const titles = document.querySelectorAll('.title');
const reasons = document.querySelectorAll('.reason');
const financials = document.querySelectorAll('.financial-info');
const clients = document.querySelectorAll('.clients-info');
const gifts = document.querySelectorAll('.gift-info');
financials.forEach((_, index) => {
  if (index % 2 === 0) {
    sr.reveal(reasons[index], configReveal("left", "30px", .65));
    sr.reveal(gifts[index], configReveal("top", "40px", .7));
    sr.reveal(financials[index], configReveal("left", "40px", .7));
  } else {
    sr.reveal(reasons[index], configReveal("right", "30px", .65));
    sr.reveal(gifts[index], configReveal("bottom", "40px", .7));
    sr.reveal(financials[index], configReveal("right", "40px", .7));
  }
  sr.reveal(titles[index], configReveal("bottom", "40px", .8));
  sr.reveal(clients[index], configReveal("top", "40px", .7));
});
sr.reveal(".intro-desc", configReveal("top", "10px", .8));
sr.reveal(".youtube-vh", configReveal("bottom", "30px", .8));






