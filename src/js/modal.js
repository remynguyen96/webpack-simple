const videoFull = document.querySelector('.header-video-btn');
const youMore = document.querySelectorAll('.you-more');
const modal = document.querySelector('#modal-container');
const modal = document.querySelector('#modal-container');
youMore.forEach((more) => {
  more.addEventListener('click', showModal);
});
videoFull.addEventListener('click', showModal);
function showModal() {
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
