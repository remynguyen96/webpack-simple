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
  if (tabs) {
    M.Tabs.init(tabs, {});
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
const loopElement = (el = '.product', position = []) => {
  const element = document.querySelectorAll(el);
  if (element.length) {
    if (position.length === 2) {
      element.forEach((items, index) => {
        if (index % 2 === 0) {
          sr.reveal(items, configReveal(position[0], '30px', .8));
        } else {
          sr.reveal(items, configReveal(position[1], '30px', .8));
        }
      });
    } else {
      element.forEach((items) => {
        sr.reveal(items, configReveal(position[0], '40px', .7));
      });
    }
  }
};
const leftRight = ['left', 'right'];
const topBottom = ['top', 'bottom'];
loopElement('.reason', leftRight);
loopElement('.financial-info', leftRight);
loopElement('.gift-info', topBottom);
loopElement('.clients-info', topBottom[0]);
loopElement('.title', topBottom[1]);
loopElement('.product', leftRight);
loopElement('.process', leftRight);
loopElement('.process-detail-img', topBottom[1]);
sr.reveal(".content", configReveal(topBottom[1], "20px", .7));
sr.reveal(".intro-desc", configReveal(topBottom[0], "10px", .7));
sr.reveal(".youtube-vh", configReveal(topBottom[1], "30px", .7));
sr.reveal(".form-register", configReveal(topBottom[0], "30px", .7));
sr.reveal(".contact-component", configReveal(topBottom[1], "30px", .7));
