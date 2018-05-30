import '../css/app.scss';
import M from 'materialize-css/dist/js/materialize.min';
import ScrollReveal from 'scrollreveal/dist/scrollreveal.min';

M.AutoInit();

const functionSlider = (nav, heightWindow) => {
  const elems = document.querySelector('.carousel');
  const minHeight = `${heightWindow - nav.offsetHeight}px`;
  elems.style.minHeight = minHeight;
  const carouselItems = document.querySelectorAll('.carousel-item');
  const carouselImages = document.querySelectorAll('.carousel-item img');
  carouselItems.forEach((item) => {
    item.style.minHeight = minHeight;
  });
  carouselImages.forEach((img) => {
    img.onclick = function(e) {
      const href = e.target.getAttribute('attr-href');
      window.open(href, '_blank');
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
};

const scrollNav = (nav) => {
  window.addEventListener('scroll', function() {
    const { scrollY } = window;
    if ((scrollY - 10) > nav.offsetHeight) {
      nav.classList.add('nav-scroll');
    } else {
      nav.classList.remove('nav-scroll');
    }
  });
};

document.addEventListener('DOMContentLoaded', function() {
  const heightWindow = window.innerHeight;
  const nav = document.querySelector('.nav-vh');
  functionSlider(nav, heightWindow);
  scrollNav(nav);
});


const sr = new ScrollReveal({
  viewFactor : 0.15,
  duration   : 800,
  distance   : "0px",
  scale      : 0.8,
});

const configReveal = (origin= "top", distance= "50px", scale= 0) => ({
  origin,
  distance,
  duration: 1200,
  scale,
});

const titles = document.querySelectorAll('.title');
titles.forEach((title) => {
  sr.reveal(title, configReveal("bottom", "40px", .8));
});

const reasons = document.querySelectorAll('.reason-desc');
reasons.forEach((reason, index) => {
  if (index % 2 === 0) {
    sr.reveal(reason, configReveal("left", "20px", .8));
  } else {
    sr.reveal(reason, configReveal("right", "20px", .8));
  }
});

const financials = document.querySelectorAll('.financial-info');
financials.forEach((financial) => {
  sr.reveal(financial, configReveal("left", "40px", .7));
});

const clients = document.querySelectorAll('.clients-info');
clients.forEach((client) => {
  sr.reveal(client, configReveal("top", "40px", .7));
});

const gifts = document.querySelectorAll('.gift-info');
gifts.forEach((gift) => {
  sr.reveal(gift, configReveal("bottom", "40px", .7));
});

sr.reveal(".intro-desc", configReveal("top", "10px", .95));
sr.reveal(".register-vh", configReveal("bottom", "20px", .8));






