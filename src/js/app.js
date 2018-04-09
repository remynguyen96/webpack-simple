import '../css/app.scss';
import { YoutubeApi } from './youtube';
import { tns } from 'tiny-slider/src/tiny-slider.module';
import './scroll';

const { innerWidth } = window;
const loadYT = new Promise((resolve) => {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  window.onYouTubeIframeAPIReady = () => resolve(window.YT);
});

const settingsFull = {
  loadYT,
  videoId: 'Ftm2uv7-Ybw',
  element: 'player-full',
  autoplay: 1,
  showinfo: 1,
};

const sliderVideo = (width) => ({
  container: '.video-slider',
  items: 1,
  nav: false,
  lazyload: true,
  mouseDrag: true,
  slideBy: 'page',
  swipeAngle: false,
  gutter: 30,
  fixedWidth: width,
  speed: 1400,
});

const sliderAuthor = (width) => ({
  container: '.author-slide',
  items: 1,
  nav: false,
  lazyload: true,
  mouseDrag: true,
  slideBy: 'page',
  swipeAngle: false,
  gutter: 30,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayText: [],
  fixedWidth: width,
  speed: 1800,
});


if (innerWidth > 1024) {
  settingsFull.onPlayerReady = (event) => {
    event.target.mute();
    event.target.setVolume(0);
  };
  settingsFull.onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PAUSED) {
      event.target.playVideo();
    }
  };

  tns(sliderVideo((innerWidth - (innerWidth * .2)) / 3));
  tns(sliderAuthor((innerWidth - (innerWidth * .2)) / 3));

  (async () => {
    await import('./widthLarge');
  })();
}

if (innerWidth <= 1024) {
  (async () => {
    await import('./width1024');
  })();

  tns(sliderVideo((innerWidth - (innerWidth * .2)) / 1));
  tns(sliderAuthor((innerWidth - (innerWidth * .2)) / 1));
}
if (innerWidth <= 768) {
  (async () => {
    await import('./width768');
  })();
}

YoutubeApi(settingsFull);

YoutubeApi({
  loadYT,
  videoId: '489HLBsev8M',
  element: 'player-doing',
});

YoutubeApi({
  loadYT,
  videoId: '489HLBsev8M',
  element: 'contact-video',
});

const videoSlider = document.querySelectorAll('.yt-player');
videoSlider.forEach((video) => {
  YoutubeApi({
    loadYT,
    videoId: video.getAttribute('data-id'),
    element: video,
  });
});

const authorSlider = document.querySelectorAll('.author-player');
authorSlider.forEach((author) => {
  YoutubeApi({
    loadYT,
    videoId: author.getAttribute('data-id'),
    element: author,
  });
});




