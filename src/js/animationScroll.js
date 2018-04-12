import ScrollReveal from 'scrollreveal/dist/scrollreveal.min';

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
const you = document.querySelectorAll('.you');

sr.reveal(".header-white-page", configReveal("top", "10px", .95));
sr.reveal(you[0], configReveal("left", "30px", .8));
sr.reveal("#video-doing", configReveal("bottom", 0));
sr.reveal(you[1], configReveal("right", "40px", .8));
sr.reveal(".video-title", configReveal("bottom", "20px", .8));
sr.reveal(".author-title", configReveal("bottom", "20px", .8));
sr.reveal(".footer-title", configReveal("bottom", "20px", .8));
sr.reveal(".copyright", configReveal("bottom", "0px", .7));
sr.reveal(".video-slider", configReveal("left", "15px", .85));
sr.reveal("#contact-us", configReveal("bottom", "15px", .8));
sr.reveal(".footer-contact", configReveal("left", "20px", .8));
sr.reveal("#google-map", configReveal("right", "15px", .8));
