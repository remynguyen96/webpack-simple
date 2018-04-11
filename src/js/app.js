import '../css/app.scss';
import { YoutubeApi } from './youtube';
import { tns } from 'tiny-slider/src/tiny-slider.module';
import './scroll';
import './modal';
import ScrollReveal from 'scrollreveal/dist/scrollreveal.min';
const sr = new ScrollReveal({
  viewFactor : 0.15,
  duration   : 800,
  distance   : "0px",
  scale      : 0.8,
});

const { innerWidth } = window;
const loadYT = new Promise((resolve) => {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  window.onYouTubeIframeAPIReady = () => resolve(window.YT);
});

const playerFull = document.getElementById('player-full');
const settingsFull = {
  loadYT,
  videoId: playerFull.getAttribute('data-id'),
  element: playerFull,
  autoplay: 1,
  showinfo: 1,
};

const sliderTogether = (container, speed = 1400, width = 450) => ({
  container,
  speed: speed,
  fixedWidth: width,
  items: 1,
  nav: false,
  lazyload: true,
  mouseDrag: true,
  slideBy: 'page',
  swipeAngle: false,
  gutter: 30,
});
const confixAutoplay = {
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayText: [],
};

if (innerWidth > 1024) {
  let timeOut;
  const btnPlay = document.querySelector('.header-video-btn');
  btnPlay.onclick = () => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      const playerFullModal = document.getElementById('player-full-modal');
      YoutubeApi(Object.assign({}, settingsFull, { element: playerFullModal, autoplay: 1, controls: 1 }));
    }, 450);
  };
  settingsFull.onPlayerReady = (event) => {
    event.target.mute();
    event.target.setVolume(0);
  };
  settingsFull.onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PAUSED) {
      event.target.playVideo();
    }
  };
  const width = (innerWidth - (innerWidth * .2)) / 3;
  tns(sliderTogether('.video-slider', 1400, width));
  tns(Object.assign({}, sliderTogether('.author-slide', 1800, width), confixAutoplay));
}
if (innerWidth <= 1024) {
  (async () => {
    await import('./width1024');
  })();
  const width = (innerWidth - (innerWidth * .25)) / 1;
  tns(sliderTogether('.video-slider', 1400, width));
  tns(Object.assign({}, sliderTogether('.author-slide', 1800, width), confixAutoplay));
}
if (innerWidth <= 768) {
  (async () => {
    await import('./width768');
  })();
}

YoutubeApi(settingsFull);
// const playerDoing = document.getElementById('player-doing');
// YoutubeApi({
//   loadYT,
//   videoId: playerDoing.getAttribute('data-id'),
//   element: playerDoing,
// });
// const playerContact = document.getElementById('player-contact');
// YoutubeApi({
//   loadYT,
//   videoId: playerContact.getAttribute('data-id'),
//   element: playerContact,
// });


// const videoSlider = document.querySelectorAll('.yt-player');
// videoSlider.forEach((video) => {
//   YoutubeApi({
//     loadYT,
//     videoId: video.getAttribute('data-id'),
//     element: video,
//   });
// });
// const authorSlider = document.querySelectorAll('.author-player');
// authorSlider.forEach((author) => {
//   YoutubeApi({
//     loadYT,
//     videoId: author.getAttribute('data-id'),
//     element: author,
//   });
// });

// sr.reveal("#test1", {
//   origin   : "top",
//   distance : "32px",
//   duration : 600,
//   scale    : 0
// });
// sr.reveal('.fooReveal', { container: '.fooContainer' });



